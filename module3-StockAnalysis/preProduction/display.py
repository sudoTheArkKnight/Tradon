import yfinance as yf
import pandas as pd
import numpy as np

today = yf.Ticker("HDFCBANK.NS")
today = today.history("1d")

cols = ["Dividends", "Stock Splits"]
today = today.drop(columns=cols)
today.index = pd.to_datetime(today.index)

df_dict = today.to_dict(orient='records')


def display():
    print(df_dict)

display()