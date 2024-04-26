import pymongo
import os

# MongoDB connection URI
mongo_uri = "mongodb+srv://tezodipta04:tezodipta04@cluster0.engiim1.mongodb.net/"

# Connect to MongoDB
client = pymongo.MongoClient(mongo_uri)

# Access database and collection
db = client["Tradeon"]
collection = db["web_data"]

# Path to the Python file containing the dictionary
py_file_path = r"D:\Mongo\dict1.py"

# Check if the file exists
if os.path.exists(py_file_path):
    with open(py_file_path, "r") as file:
        try:
            # Execute the Python file to get the dictionary
            dict_namespace = {}
            exec(file.read(), dict_namespace)
            # Insert the dictionary into the MongoDB collection
            result = collection.insert_one(dict_namespace.get("article_data", {}))
            print("Data inserted successfully.")
            print("Inserted document ID:", result.inserted_id)
        except Exception as e:
            print(f"Error: {e}")
else:
    print(f"File '{py_file_path}' not found.")

# Close the connection to MongoDB
client.close()
