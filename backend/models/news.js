import mongoose from "mongoose";
// Define the schema
const newsSchema = new mongoose.Schema({
    site_name: String,
    article_title: String,
    article_desc: String,
    left_block_content: String,
    p_tags: [String], // Array of strings
});

// Create the model
const news = mongoose.model("web_datas", newsSchema);

// Export the model
export default news;
