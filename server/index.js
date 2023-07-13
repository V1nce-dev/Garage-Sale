require("dotenv").config();

const express = require("express");
const cors = require("cors")
const userDB = require("./config/userdb")
const app = express();
const port = 8080;

userDB()

app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use("/api/", require("./routes/users"))

app.listen(port, () => {
    console.log(`running on port ${port}`)
})