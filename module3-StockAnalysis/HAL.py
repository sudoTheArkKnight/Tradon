import yfinance as yf
import pandas as pd
import os

sp500 = yf.Ticker("HAL")
sp500 = sp500.history(period="max")

sp500["Tomorrow"] = sp500["Close"].shift(-1)
sp500["Target"] = (sp500["Tomorrow"] > sp500["Close"]).astype(int)

cols = ["Dividends", "Stock Splits"]
sp500 = sp500.drop(columns=cols)
sp500.index = pd.to_datetime(sp500.index)

# this where the prediction will start
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import precision_score

def backtest(data, model, predictors, start=500, step=250):
    all_predictions = []
    for i in range(start, data.shape[0], step):
        train = data.iloc[0:i].copy()
        test = data.iloc[i:(i + step)].copy()
        if train.shape[0] > 0 and test.shape[0] > 0:
            predictions = predict(train, test, predictors, model)
            all_predictions.append(predictions)
        return pd.concat(all_predictions)

horizons = [2, 5, 60, 250]
new_predictors = []

for horizon in horizons:
    rolling_averages = sp500.rolling(horizon).mean()

    ratio_column = f"Close_Ratio_{horizon}"
    sp500[ratio_column] = sp500["Close"] / rolling_averages["Close"]

    trend_column = f"Trend_{horizon}"
    sp500[trend_column] = sp500.shift(1).rolling(horizon).sum()["Target"]

    new_predictors += [ratio_column, trend_column]
sp500 = sp500.dropna(subset=sp500.columns[sp500.columns != "Tomorrow"])
sp500
model = RandomForestClassifier(n_estimators=200, min_samples_split=50, random_state=1)


def predict(train, test, predictors, model):
    model.fit(train[predictors], train["Target"])
    preds = model.predict_proba(test[predictors])[:, 1]
    preds[preds >= .6] = 1
    preds[preds < .6] = 0
    preds = pd.Series(preds, index=test.index, name="Predictions")
    combined = pd.concat([test["Target"], preds], axis=1)
    return combined


predictions = backtest(sp500, model, new_predictors)
predictions["Predictions"].value_counts()
print(precision_score(predictions["Target"], predictions["Predictions"]))