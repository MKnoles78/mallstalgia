const express = require("express");
const router = express.Router();
const db = require("../models");
const jwt = require("jsonwebtoken");

router.post("/", (req, res) => {
  const username = req.body.username ? req.body.username.trim() : "";
  const password = req.body.password ? req.body.password.trim() : "";

  if (username && password) {
    db.User.create({ username, password })
      .then(async (newUser) => {
        const token = await jwt.sign(
          {
            username: newUser.username,
            id: newUser.id,
            exp: Math.floor(Date.now() / 1000) + 60 * 60,
          },
          process.env.REACT_APP_SECRET_KEY
        );
        console.log(token);
        await res.json({
          success: true,
          data: token,
        });
      })
      .catch((err) => {
        console.log(err);
        res.status(500);
        res.json({
          success: false,
          message: "Failed to create new user.",
        });
      });
  } else {
    res.status(500).json({
      success: false,
      message: "Please enter a valid username and password.",
    });
  }
});

router.put("/:id", (req, res) => {
  console.log(req.body);
  const { username, fname, lname, zipcode } = req.body;
  const { id } = req.params;
  db.User.update(
    {
      username: username,
      fname: fname,
      lname: lname,
      zipcode:  zipcode,
    },
    { where: { id: req.params.id } }
  )
    .then((rowsUpdated) => {
      res.json({
        success: true,
        data: rowsUpdated,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: "Could not save user data.",
      });
    });
});


module.exports = router;
