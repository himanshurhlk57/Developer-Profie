const express = require("express");
const app = express();
const path = require("path");

require("dotenv").config();

const port = process.env.PORT || 5000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello express bro");
});

app.listen(port, () => {
  console.log(`Server listening at port: ${port}`);
});
