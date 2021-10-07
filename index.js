const dotenv = require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 9000;
const path = require("path");
const { application } = require("express");

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "client/build")));
app.use("/api/*", (req, res) => {
  res.json({ data: "This is the API data" });
});
app.use("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

app.listen(port, () => console.log("server listening on: ", port));

// console.log("its alivveee");
// console.log(__dirname);
// console.log(__filename);
// console.log(process.env.USER);
// console.log(process.env.PORT);
// console.log(process.env.DB_PASS);
