const path = require("path");

const express = require("express");
const app = express();
const cors = require("cors");

const helmet = require("helmet");
app.use(helmet());
app.use(cors());
app.use(express.json());

const listSessions = [];

app.get("/", (req, res) => {
    res.json({"text": "Hello World"});
});

app.get("/name", (req, res) => {
    res.json({"text": "Hello World"});
});

app.post("/login", (req, res) => {
    const {username, password} = req.body;
    if (password === "xoxo") {
        listSessions.push(username);
        res.cookie("session", "1234")
        res.json({"status": "success"});
    } else {
        res.json({"status": "failure"});
    }
});

app.post("/login_check", (req, res) => {
});

app.get("/logout", (req, res) => {
});

app.listen(4000, () => {
    console.log("Server is running on port 4000");
});
