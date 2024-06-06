import yfinance as yf
import pandas as pd
import os
import requests
from textblob import TextBlob
from vaderSentiment.vaderSentiment import SentimentIntensityAnalyzer
import pymongo

ticker = "AMZN"


def get_news_sentiment(ticker):
    news_url = f'https://newsapi.org/v2/everything?q={ticker}&apiKey=89a24ffd1fb64249944f2376025eb44e'
    response = requests.get(news_url)
    news_data = response.json()
    sentiments = []

    if 'articles' in news_data:
        for article in news_data['articles']:
            title = article['title']
            description = article.get('description', '')

            # Analyze sentiment of title using TextBlob
            title_sentiment = TextBlob(title).sentiment.polarity

            # Analyze sentiment of description using TextBlob, but only if it's not None
            if description:
                description_sentiment = TextBlob(description).sentiment.polarity
                sentiments.append(title_sentiment)
                sentiments.append(description_sentiment)

    final = sum(sentiments) / len(sentiments)
    return final


def get_prediction(ticker):

    sp500 = yf.Ticker(ticker)
    sp500 = sp500.history(period="max")

    cols = ["Dividends", "Stock Splits"]

    sp500 = sp500.drop(columns=cols)
    sp500.index = pd.to_datetime(sp500.index)

    sp500["Tomorrow"] = sp500["Close"].shift(-1)
    sp500["Target"] = (sp500["Tomorrow"] > sp500["Close"]).astype(int)
    sp500 = sp500.loc["1990-01-01":].copy()

    from sklearn.ensemble import RandomForestClassifier
    from sklearn.metrics import precision_score

    model = RandomForestClassifier(n_estimators=50, min_samples_split=50, random_state=1)

    train = sp500.iloc[:-1]
    test = sp500.iloc[-1:]

    predictors = ["Close", "Volume", "Open", "High", "Low"]
    model.fit(train[predictors], train["Target"])

    preds = model.predict(test[predictors])
    preds = pd.Series(preds, index=test.index)

    finalPrediction = preds.iloc[0]
    finalSentiment = get_news_sentiment("AMZ")

    if finalSentiment > 0.1:
        finalPrediction = 1

    return finalPrediction, test.index[0]


prediction, date = get_prediction(ticker)


def display():
    today = yf.Ticker(ticker)
    today = today.history("1d")

    cols = ["Dividends", "Stock Splits"]
    today = today.drop(columns=cols)
    today.index = pd.to_datetime(today.index)

    prediction_values = {"Target": prediction}

    df_dict = today.to_dict(orient='records')
    df_dict[0].update(prediction_values)
    df_dict[0].update({"Date": date.strftime("%Y-%m-%d")})

    # Reordering the dictionary
    reordered_dict = {
        'Date': df_dict[0]['Date'],
        'Open': df_dict[0]['Open'],
        'High': df_dict[0]['High'],
        'Low': df_dict[0]['Low'],
        'Close': df_dict[0]['Close'],
        'Volume': df_dict[0]['Volume'],
        'Target': df_dict[0]['Target']
    }

    print([reordered_dict])


display()

# client = pymongo.MongoClient("mongodb+srv://tezodipta04:tezodipta04@cluster0.engiim1.mongodb.net/test?retryWrites=true&w=majority")
# db = client['test']
# collection = db['googles']
#
# # Insert the document into the collection
# collection.insert_one(df_dict[0])
#
# # Close the connection
# client.close()
