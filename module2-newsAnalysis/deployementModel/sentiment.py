import requests
from textblob import TextBlob
from vaderSentiment.vaderSentiment import SentimentIntensityAnalyzer


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
    print(round(final, 5))


get_news_sentiment("HDFCBANK")
