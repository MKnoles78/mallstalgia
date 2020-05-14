require("dotenv").config();
const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/api/config", (req, res) => {
  res.json({
    success: true,
  });
});

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "/client/", "/client/src/containers/Home.jsx"));
});

app.listen(PORT, () => {
  console.log(`App is running on http://localhost:${PORT}`);
});