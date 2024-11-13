const express = require("express");
const router = express.Router();

const { User } = require("../models");

router.get("/users", (req, res) => {
  User.findAll().then((users) => {
    res.json(users);
  });
});

router.get("/users/:id", (req, res) => {
  User.findByPk(req.params.id).then((user) => {
    if (user) {
      res.json(user);
    } else {
      res.status(404).send("User not found");
    }
  });
});

router.post("/users", (req, res) => {
  User.create({
    name: req.body.name,
    age: req.body.age,
  }).then((user) => {
    res.json(user);
  });
});

router.put("/users/:id", (req, res) => {
  User.update(
    {
      name: req.body.name,
      age: req.body.age,
    },
    {
      where: { id: req.params.id },
    }
  ).then(() => {
    res.send("User updated");
  });
});

router.delete("/users/:id", (req, res) => {
  User.destroy({
    where: { id: req.params.id },
  }).then(() => {
    res.send("User deleted");
  });
});

module.exports = router;
