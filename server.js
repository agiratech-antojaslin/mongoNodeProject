const express = require("express");
const app = express();
const mongoose = require("mongoose");
const url = "mongodb://localhost/mongonodeDB";

mongoose.connect(url, {useNewUrlParser: true});

const con = mongoose.connection;
con.on("open", function() {
    console.log("Connected...");
});

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("index");
});

const usersRouter = require("./routes/users");
const playersRouter = require("./routes/players");

app.use(express.json());

app.use("/users", usersRouter);
app.use("/players", playersRouter);

app.listen(3000, () => {
    console.log("Server is listening port 3000")
});