import asyncHandler from "express-async-handler";
import WebData from "../models/webDataModel.js";

// @desc Fetch all web data
// @route GET /api/web-data
// @access Public
const getWebData = asyncHandler(async (req, res) => {
    const webData = await WebData.find({});
    console.log(webData); // Log fetched data to console
    res.json(webData);
});

export { getWebData };
