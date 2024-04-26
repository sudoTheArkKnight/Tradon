import pymongo
from bson.objectid import ObjectId

# MongoDB connection URI
mongo_uri = "mongodb+srv://tezodipta04:tezodipta04@cluster0.engiim1.mongodb.net/"

# Connect to MongoDB
client = pymongo.MongoClient(mongo_uri)

# Access database
db = client["Tradeon"]

# Access collection
collection = db["web_data"]

# Document ID to delete
doc_id = "6628c468cf1ef7bb8405f452"

# Convert string ID to ObjectId
doc_id_obj = ObjectId(doc_id)

# Delete the document
result = collection.delete_one({"_id": doc_id_obj})

# Check if deletion was successful
if result.deleted_count == 1:
    print("Document deleted successfully.")
else:
    print("Document not found or deletion failed.")

# Close the connection to MongoDB
client.close()
