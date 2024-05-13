import yfinance as yf
import pandas as pd
import os

sp500 = yf.Ticker("AMZ")
sp500 = sp500.history(period="max")

cols = ["Dividends", "Stock Splits", "Capital Gains"]

sp500 = sp500.drop(columns=cols)
sp500.index = pd.to_datetime(sp500.index)

sp500["Tomorrow"] = sp500["Close"].shift(-1)
sp500["Target"] = (sp500["Tomorrow"] > sp500["Close"]).astype(int)
sp500 = sp500.loc["1990-01-01":].copy()

pd.sp500.to_json()

from sklearn.ensemble import RandomForestClassifier

model = RandomForestClassifier(n_estimators=10000, min_samples_split=100, random_state=1)

train = sp500.iloc[:-100]
test = sp500.iloc[-100:]

predictors = ["Close", "Volume", "Open", "High", "Low"]
model.fit(train[predictors], train["Target"])
from sklearn.metrics import precision_score

preds = model.predict(test[predictors])
preds = pd.Series(preds, index=test.index)
print(precision_score(test["Target"], preds, zero_division="warn"))