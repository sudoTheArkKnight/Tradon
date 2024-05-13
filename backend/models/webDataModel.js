import mongoose from "mongoose";

const webDataSchema = mongoose.Schema({
    site_name: {
        type: String,
        required: true
    }
});

const WebData = mongoose.model("WebData", webDataSchema);

export default WebData;
