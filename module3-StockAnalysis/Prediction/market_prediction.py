import yfinance as yf
import pandas as pd
import os
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import precision_score


def download_data():
    sp500 = yf.Ticker("^GSPC")
    sp500_data = sp500.history(period="max")
    sp500_data.index = pd.to_datetime(sp500_data.index).tz_localize(None)  # Convert to timezone-naive
    sp500_data.to_csv("sp500.csv")
    return sp500_data


def load_data():
    if os.path.exists("sp500.csv"):
        sp500 = pd.read_csv("sp500.csv", index_col=0, parse_dates=True)
    else:
        sp500 = download_data()
    return sp500


def preprocess_data(sp500):
    if "Dividends" in sp500.columns:
        del sp500["Dividends"]
    if "Stock Splits" in sp500.columns:
        del sp500["Stock Splits"]

    sp500 = sp500.loc[sp500.index >= pd.Timestamp("1990-01-01")].copy()
    sp500["Tomorrow"] = sp500["Close"].shift(-1)
    sp500["Target"] = (sp500["Tomorrow"] > sp500["Close"]).astype(int)
    return sp500


sp500 = yf.download("^GSPC", start="1980-01-01", end="2023-03-15").tz_localize(None)  # Convert to timezone-naive
sp500 = preprocess_data(sp500)


def split_data(sp500):
    train = sp500.iloc[:-100]
    test = sp500.iloc[-100:]
    return train, test


def train_model(train, predictors):
    model = RandomForestClassifier(n_estimators=100, min_samples_split=100, random_state=1)
    model.fit(train[predictors].dropna(), train["Target"])
    return model


def predict(train, test, predictors, model):
    model.fit(train[predictors].dropna(), train["Target"])
    preds = model.predict(test[predictors])
    preds = pd.Series(preds, index=test.index, name="Predictions")
    combined = pd.concat([test["Target"], preds], axis=1)
    return combined


def backtest(data, model, predictors, window_size=2500, step_size=250):
    all_predictions = []

    for i in range(0, data.shape[0], step_size):
        train = data.iloc[0:i].copy()
        test = data.iloc[i:(i+window_size)].copy()
        predictions = predict(train, test, predictors, model)
        all_predictions.append(predictions)
    return pd.concat(all_predictions)


def evaluate_model(predictions):
    print("Precision Score:", precision_score(predictions["Target"], predictions["Predictions"]))
    print("Predictions Distribution:", predictions["Predictions"].value_counts() / predictions.shape[0])


if __name__ == "__main__":
    sp500 = load_data()
    sp500 = preprocess_data(sp500)
    train, test = split_data(sp500)
    predictors = ["Close", "Volume", "Open", "High", "Low"]
    model = train_model(train, predictors)
    predictions = predict(train, test, predictors, model)
    evaluate_model(predictions)

    # Generate predictions for the entire dataset
    predictions = backtest(sp500, model, predictors)
    evaluate_model(predictions)
