const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");

let fruits = [];

router.post(
  "/fruits",
  [check("color").not().isEmpty().trim().withMessage("Color is required")],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.json({ error: errors.array() });
    }

    const newFruit = {
      id: fruits.length + 1,
      name: req.body.name,
      color: req.body.color,
    };
    fruits.push(newFruit);
    res.json(fruits);
  }
);

router.put("/fruits/:id", (req, res) => {
  const fruit = fruits.find((f) => f.id === parseInt(req.params.id));
  if (fruit) {
    fruit.name = req.body.name;
    fruit.color = req.body.color;
    res.send("Fruit updated");
  } else {
    res.status(404).send("Fruit not found");
  }
});

router.delete("/fruits/:id", (req, res) => {
  fruits = fruits.filter((f) => f.id !== parseInt(req.params.id));
  res.send("Fruit deleted");
});

module.exports = router;
