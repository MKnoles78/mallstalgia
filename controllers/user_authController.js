const express = require("express");
const router = express.Router();
const db = require("../models");
const jwt = require("jsonwebtoken");


router.post("/", (req, res) => {
  console.log("Authentication POST route");
  console.log(req.body.username);
  db.User.findOne({
    where: { username: req.body.username.trim() },
  })
    .then(async (foundUser) => {
      console.log(foundUser);
      if (foundUser && foundUser.password === req.body.password) {
        const token = jwt.sign(
          {
            username: foundUser.username,
            id: foundUser.id,
            exp: Math.floor(Date.now() / 1000) + 60 * 60,
          },
          "carolbaskinkilledherhusband"
        );
        console.log(token);
          res.json({
          success: true,
          data: token,
        });
      } else {
        res.status(403).json({
          success: false,
          message: "Invalid username or password.",
        });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        success: false,
        message: "Failed to validate user.",
      });
    });
});

module.exports = router;
