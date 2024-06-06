import mongoose from "mongoose";

const DataSchema = new mongoose.Schema({
    date: Date,
    Open: Number,
    High: Number,
    Low: Number,
    Close: Number,
    // Volume: Number,
    Tomorrow: Number,
    Target: Number,
});

const getModelForCollection = (collectionName) => {
    return mongoose.model(collectionName, DataSchema);
};

export default getModelForCollection;
