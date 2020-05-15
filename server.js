require("dotenv").config();
const express = require("express");
const path = require("path");
const db = require("./models");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/api/config", (req, res) => {
  res.json({
    success: true,
    currentPort: PORT,
  });
});

// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "/client/build/index.html"));
// });

app.post("/api/user", (req, res) =>{

})

db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Express App is running on http://localhost:${PORT}`);
  });
});