import mongoose from "mongoose";

const DataSchema = new mongoose.Schema({
    date: Date,
    Open: Number,
    High: Number,
    Low: Number,
    Close: Number,
    Volume: Number,
    Tomorrow: Number,
    Target: Number,
});

const titan = mongoose.model("titans", DataSchema);

export default titan;
