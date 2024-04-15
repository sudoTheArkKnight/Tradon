const path = require("path");

const express = require("express");
const app = express();

const helmet = require("helmet");
app.use(helmet());

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render(path.join(__dirname, "../frontend/pages/welcome.jsx"));
});

app.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/pages/login.jsx"));
});

app.post("/login_check", (req, res) => {
    const password = req.body.password;
    const username = req.body.username;
    if (password === "xoxo") {
        res.redirect("../frontend/sections/hero.jsx");
    } else {
        res.redirect("../frontend/pages/login.jsx");
    }
});

app.get("/logout", (req, res) => {
    res.redirect("../frontend/pages/login.jsx");
});

app.listen(4000, () => {
    console.log("Server is running on port 4000");
});
