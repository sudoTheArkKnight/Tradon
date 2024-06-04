// // completed till Register User Endpoint

// import express from "express";
// import dotenv from "dotenv";
// import cors from "cors";
// dotenv.config();
// import cookieParser from "cookie-parser";
// import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
// import connectDB from "./config/db.js";
// const port = process.env.PORT || 5000;
// import userRoutes from "./routes/userRoutes.js";
// // import google from "./models/graph.js";
// import icici from "./models/icici.js";
// import google from "./models/google.js";
// import hdfc from "./models/hdfc.js";
// import mrf from "./models/mrf.js";
// import hal from "./models/hal.js";
// import infy from "./models/infy.js";
// import itc from "./models/itc.js";
// import mandm from "./models/mandm.js";
// import sbi from "./models/sbi.js";
// import tcs from "./models/tcs.js";
// import titan from "./models/titan.js";

// import getModelForCollection from "./models/graph.js";
// import news from "./models/news.js";
// connectDB();

// const app = express();
// app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// app.use(cookieParser());

// app.use("/api/users", userRoutes);
// // app.use("/api/web-data", webDataRoutes); // Use the new route

// app.get("/", (req, res) => {
//     res.send("Server is ready");
// });
// app.get("/getNews", (req, res) => {
//     news.find()
//         .then((n) => res.json(n))
//         .catch((err) => res.status(500).json({ error: err.message }));
// });

// app.get("/getGraph/:collectionName", (req, res) => {
//     const { collectionName } = req.params;
//     const Datamodel = getModelForCollection(collectionName);
//     Datamodel.find()
//         .then((data) => res.json(data))
//         .catch((err) => res.status(500).json({ error: err.message }));
// });
// app.get("/getIcici", (req, res) => {
//     icici
//         .find()
//         .then((i) => res.json(i))
//         .catch((err) => res.status(500).json({ error: err.message }));
// });
// app.get("/getMrf", (req, res) => {
//     mrf
//         .find()
//         .then((i) => res.json(i))
//         .catch((err) => res.status(500).json({ error: err.message }));
// });
// app.get("/getHdfc", (req, res) => {
//     hdfc
//         .find()
//         .then((i) => res.json(i))
//         .catch((err) => res.status(500).json({ error: err.message }));
// });
// app.get("/getGoogle", (req, res) => {
//     google
//         .find()
//         .then((g) => res.json(g))
//         .catch((err) => res.status(500).json({ error: err.message }));
// });
// app.get("/getHal", (req, res) => {
//     hal
//         .find()
//         .then((h) => res.json(h))
//         .catch((err) => res.status(500).json({ error: err.message }));
// });
// app.get("/getInfy", (req, res) => {
//     infy
//         .find()
//         .then((i) => res.json(i))
//         .catch((err) => res.status(500).json({ error: err.message }));
// });
// app.get("/getItc", (req, res) => {
//     itc
//         .find()
//         .then((i) => res.json(i))
//         .catch((err) => res.status(500).json({ error: err.message }));
// });
// app.get("/getMandM", (req, res) => {
//     mandm
//         .find()
//         .then((m) => res.json(m))
//         .catch((err) => res.status(500).json({ error: err.message }));
// });
// app.get("/getSbi", (req, res) => {
//     sbi
//         .find()
//         .then((s) => res.json(s))
//         .catch((err) => res.status(500).json({ error: err.message }));
// });
// app.get("/getTcs", (req, res) => {
//     tcs
//         .find()
//         .then((t) => res.json(t))
//         .catch((err) => res.status(500).json({ error: err.message }));
// });
// app.get("/getTitan", (req, res) => {
//     titan
//         .find()
//         .then((t) => res.json(t))
//         .catch((err) => res.status(500).json({ error: err.message }));
// });

// app.use(notFound);
// app.use(errorHandler);

// app.listen(port, () => {
//     console.log(`Server is listening on port ${port}`);
// });


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
import mrf from "./models/mrf.js";
import hal from "./models/hal.js";
import infy from "./models/infy.js";
import itc from "./models/itc.js";
import mandm from "./models/mandm.js";
import sbi from "./models/sbi.js";
import tcs from "./models/tcs.js";
import titan from "./models/titan.js";

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

app.get("/getMrf", (req, res) => {
    mrf
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

app.get("/getInfy", (req, res) => {
    infy
        .find()
        .then((i) => res.json(i))
        .catch((err) => res.status(500).json({ error: err.message }));
});

app.get("/getItc", (req, res) => {
    itc
        .find()
        .then((i) => res.json(i))
        .catch((err) => res.status(500).json({ error: err.message }));
});

app.get("/getMandM", (req, res) => {
    mandm
        .find()
        .then((m) => res.json(m))
        .catch((err) => res.status(500).json({ error: err.message }));
});

app.get("/getSbi", (req, res) => {
    sbi
        .find()
        .then((s) => res.json(s))
        .catch((err) => res.status(500).json({ error: err.message }));
});

app.get("/getTcs", (req, res) => {
    tcs
        .find()
        .then((t) => res.json(t))
        .catch((err) => res.status(500).json({ error: err.message }));
});

app.get("/getTitan", (req, res) => {
    titan
        .find()
        .then((t) => res.json(t))
        .catch((err) => res.status(500).json({ error: err.message }));
});

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
