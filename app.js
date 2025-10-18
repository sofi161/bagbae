const express = require("express");
const app = express();

const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const path = require("path");

const usersRouter = require("./routes/usersRouter");
const ownersRouter = require("./routes/ownersRouter");
const productsRouter = require("./routes/productsRouter");

const db = require("./config/mongoose.connection");

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/users", usersRouter);
app.use("/owners", ownersRouter);
app.use("/products", productsRouter);

app.get("/", (req, res) => {
  res.send("welcome");
});

app.listen(3000);
