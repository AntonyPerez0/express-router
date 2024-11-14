const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");

let users = [];

// Create a new user
router.post(
  "/users",
  [check("name").not().isEmpty().trim().withMessage("Name is required")],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.json({ error: errors.array() });
    }

    const newUser = { id: users.length + 1, name: req.body.name };
    users.push(newUser);
    res.json(users);
  }
);

// Update a user
router.put("/users/:id", (req, res) => {
  const user = users.find((u) => u.id === parseInt(req.params.id));
  if (user) {
    user.name = req.body.name;
    res.send("User updated");
  } else {
    res.status(404).send("User not found");
  }
});

// Delete a user
router.delete("/users/:id", (req, res) => {
  users = users.filter((u) => u.id !== parseInt(req.params.id));
  res.send("User deleted");
});

module.exports = router;
