import yfinance as yf
import pandas as pd
import os


sp500 = yf.Ticker("SBIN. NS")
sp500 = sp500.history(period="max")

sp500["Tomorrow"] = sp500["Close"].shift(-1)
sp500["Target"] = (sp500["Tomorrow"] > sp500["Close"]).astype(int)

cols = ["Dividends", "Stock Splits"]
sp500 = sp500.drop(columns=cols)
sp500.index = pd.to_datetime(sp500.index)

import os
import pandas as pd
import json

# Assuming sp500 is your DataFrame
sp500.index = sp500.index.astype(str)
df_dict = sp500.to_dict(orient='records')
json_data = json.dumps(df_dict, indent=4)

# Convert the data to the desired format
custom_data = {}

for i, row in enumerate(sp500.iterrows(), 1):
    custom_data[str(i)] = {
        "date": row[0],
        "Open": row[1]["Open"],
        "High": row[1]["High"],
        "Low": row[1]["Low"],
        "Close": row[1]["Close"],
        "Volume": row[1]["Volume"],
        "Tomorrow": row[1]["Tomorrow"],
        "Target": row[1]["Target"]
    }

# Write the custom data to a JSON file
output_file = "output.json"
with open(output_file, "w") as f:
    json.dump(custom_data, f, indent=4)

# Print the file name to let the user know where to find the output
print(f"Output saved to {output_file}")