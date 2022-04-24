const express = require("express");
const res = require("express/lib/response");
const app = express();
const path = require("path");
const developerRoutes = require("./routes/developerRoutes");

require("dotenv").config();

const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/developers", developerRoutes);

app.listen(port, () => {
  console.log(`Server listening at port: ${port}`);
});
