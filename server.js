require("dotenv").config();
const express = require("express");
const path = require("path");
const db = require("./models");
const userController = require("./controllers/usersController");
const user_authController = require("./controllers/user_authController");

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

app.use("/api/user", userController);
app.use("/api/auth", user_authController);

app.use(express.static("client/build"));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "/client/build/index.html"));
});

db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Express App is running on http://localhost:${PORT}`);
  });
});
