const express = require("express");
const router = express.Router();
const db = require("../models");
const jwt = require("jsonwebtoken");

router.post("/", (req, res) => {
  const username = req.body.username ? req.body.username.trim() : "";
  const password = req.body.password ? req.body.password.trim() : "";
  const email = req.body.email ? req.body.email.trim() : "";
  const fname = req.body.fname ? req.body.fname.trim() : "";
  const lname = req.body.lname ? req.body.lname.trim() : "";
  const zipcode = req.body.zipcode ? req.body.zipcode.trim() : "";

  if (fname && lname && email && username && password && zipcode) {
    db.User.create({ fname, lname, email, username, password, zipcode })
      .then(async (newUser) => {
        const token = await jwt.sign(
          {
            username: newUser.username,
            id: newUser.id,
            exp: Math.floor(Date.now() / 1000) + 60 * 60,
          },
          "carolbaskinkilledherhusband"
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
  const { fname, lname, email, username, password, zipcode } = req.body;
  const { id } = req.params;
  db.User.update(
    {
      fname: fname,
      lname: lname,
      email: email,
      username: username,
      zipcode: zipcode,
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

router.get("/:id", (req, res) => {
  db.User.findOne({
    where: {
      id: req.params.id,
    },
  }).then((user) => res.json(user));
});

router.get("/", (req, res) => {
  console.log(req.query);
  let newObjectToQuery = {};
  console.log(newObjectToQuery);
  db.User.findAll({
    where: newObjectToQuery,
  })
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;
