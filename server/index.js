require("dotenv").config();

const express = require("express");
const cors = require("cors");
const userDB = require("./config/db");
const app = express();
const port = 8080;

userDB();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/uploads", express.static("uploads"));

app.use("/api/", require("./routes/users"));
app.use("/api/", require("./routes/post"));

app.listen(port, () => {
    console.log(`running on port ${port}`);
});
