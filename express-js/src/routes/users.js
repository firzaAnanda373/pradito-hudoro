const express = require("express");
const router = express.Router();
const userControllers = require("../controllers/users");

router.get("/", userControllers.getAllUsers);
router.post("/", userControllers.createUser);
router.patch("/:id", userControllers.updateUser);
router.delete("/:id", userControllers.deleteUser);

module.exports = router;
