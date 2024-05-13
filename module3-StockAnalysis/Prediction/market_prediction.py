import yfinance as yf
import pandas as pd
import os


def get_prediction(ticker):
    sp500 = yf.Ticker(ticker)
    sp500 = sp500.history(period="max")

    cols = ["Dividends", "Stock Splits", "Capital Gains"]

    sp500 = sp500.drop(columns=cols)
    sp500.index = pd.to_datetime(sp500.index)

    sp500["Tomorrow"] = sp500["Close"].shift(-1)
    sp500["Target"] = (sp500["Tomorrow"] > sp500["Close"]).astype(int)
    sp500 = sp500.loc["1990-01-01":].copy()

    from sklearn.ensemble import RandomForestClassifier
    from sklearn.metrics import precision_score

    model = RandomForestClassifier(n_estimators=10000, min_samples_split=100, random_state=1)

    train = sp500.iloc[:-1]
    test = sp500.iloc[-1:]

    predictors = ["Close", "Volume", "Open", "High", "Low"]
    model.fit(train[predictors], train["Target"])

    preds = model.predict(test[predictors])
    preds = pd.Series(preds, index=test.index)
    print(precision_score(test["Target"], preds, zero_division="warn"))
    return preds.iloc[0], test.index[0]


ticker = "AMZ"
prediction, date = get_prediction(ticker)
print(f"Prediction for {date}: {prediction}")


def display():
    today = yf.Ticker("HDFCBANK.NS")
    today = today.history("1d")

    cols = ["Dividends", "Stock Splits"]
    today = today.drop(columns=cols)
    today.index = pd.to_datetime(today.index)

    df_dict = today.to_dict(orient='records')
    print(df_dict)

display()