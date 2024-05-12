import pymongo
import json

# MongoDB connection URI
mongo_uri = "mongodb+srv://ayushkhatri362:ayushkhatri217@cluster0.engiim1.mongodb.net/"

# Connect to MongoDB
client = pymongo.MongoClient(mongo_uri)

# Access database
db = client["mernauth"]

# Access collection
collection = db["web-data"]

# Load JSON data from file
json_file_path = r"D:\Tradeon\Tradon\Mongo\scrapped1.json"
try:
    with open(json_file_path, "r") as file:
        json_data = json.load(file)
except FileNotFoundError:
    print(f"File '{json_file_path}' not found.")
    json_data = None
except json.JSONDecodeError as e:
    print(f"Error decoding JSON file: {e}")
    json_data = None

# Check if json_data is not empty
if json_data:
    if isinstance(json_data, dict):
        # Insert JSON data as a single document
        result = collection.insert_one(json_data)
        print("Data inserted successfully.")
        print("Inserted document ID:", result.inserted_id)
    else:
        print("JSON data is not in the expected format (dictionary).")
else:
    print("JSON data is empty or invalid.")

# Close the connection to MongoDB
client.close()

