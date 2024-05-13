import express from "express";
import { getWebData } from "../controllers/webDataController.js";

const router = express.Router();

router.route("/").get(getWebData);

export default router;
