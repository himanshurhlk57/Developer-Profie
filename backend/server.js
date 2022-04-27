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

// serve frontend
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/build")));
  app.get("*", (req, res) =>
    res.sendFile(
      path.resolve(__dirname, "../", "frontend", "build", "index.html")
    )
  );
} else {
  app.get("/", (req, res) => {
    res.send("set it to production");
  });
}

app.listen(port, () => {
  console.log(`Server listening at port: ${port}`);
});
