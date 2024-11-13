const express = require("express");
const router = express.Router();

const { Fruit } = require("../models");

router.get("/fruits", (req, res) => {
  Fruit.findAll().then((fruits) => {
    res.json(fruits);
  });
});

router.get("/fruits/:id", (req, res) => {
  Fruit.findByPk(req.params.id).then((fruit) => {
    if (fruit) {
      res.json(fruit);
    } else {
      res.status(404).send("Fruit not found");
    }
  });
});

router.post("/fruits", (req, res) => {
  Fruit.create({
    name: req.body.name,
    color: req.body.color,
  }).then((fruit) => {
    res.json(fruit);
  });
});

router.put("/fruits/:id", (req, res) => {
  Fruit.update(
    {
      name: req.body.name,
      color: req.body.color,
    },
    {
      where: { id: req.params.id },
    }
  ).then(() => {
    res.send("Fruit updated");
  });
});

router.delete("/fruits/:id", (req, res) => {
  Fruit.destroy({
    where: { id: req.params.id },
  }).then(() => {
    res.send("Fruit deleted");
  });
});

module.exports = router;
