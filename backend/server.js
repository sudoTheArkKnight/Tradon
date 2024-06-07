import express from "express";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();
import cookieParser from "cookie-parser";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import connectDB from "./config/db.js";
const port = process.env.PORT || 5000;
import userRoutes from "./routes/userRoutes.js";
import icici from "./models/icici.js";
import google from "./models/google.js";
import hdfc from "./models/hdfc.js";
import hal from "./models/hal.js";
import amazon from "./models/amazon.js";
import apple from "./models/apple.js";
import getModelForCollection from "./models/graph.js";
import news from "./models/news.js";
connectDB();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
    res.send("Server is ready");
});

app.get("/getNews", (req, res) => {
    news.find()
        .then((n) => res.json(n))
        .catch((err) => res.status(500).json({ error: err.message }));
});

app.get("/getGraph/:collectionName", (req, res) => {
    const { collectionName } = req.params;
    const Datamodel = getModelForCollection(collectionName);
    Datamodel.find()
        .sort({ date: -1 })
        .limit(30)
        .then((data) => res.json(data))
        .catch((err) => res.status(500).json({ error: err.message }));
});

app.get("/getIcici", (req, res) => {
    icici
        .find()
        .then((i) => res.json(i))
        .catch((err) => res.status(500).json({ error: err.message }));
});


app.get("/getHdfc", (req, res) => {
    hdfc
    .find()
    .then((i) => res.json(i))
    .catch((err) => res.status(500).json({ error: err.message }));
});

app.get("/getGoogle", (req, res) => {
    google
    .find()
    .then((g) => res.json(g))
    .catch((err) => res.status(500).json({ error: err.message }));
});

app.get("/getHal", (req, res) => {
    hal
    .find()
    .then((h) => res.json(h))
    .catch((err) => res.status(500).json({ error: err.message }));
});
app.get("/getApple", (req, res) => {
    apple
    .find()
    .then((h) => res.json(h))
    .catch((err) => res.status(500).json({ error: err.message }));
});
app.get("/getAmazon", (req, res) => {
    amazon
    .find()
    .then((h) => res.json(h))
    .catch((err) => res.status(500).json({ error: err.message }));
});


app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
