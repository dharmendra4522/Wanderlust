const express = require("express");
const router = express.Router();

//Index -users
router.get("/", (req, res) => {
    res.send("Get for users");
});

//Show -users
router.get("/:id", (req, res) => {
    res.send("Get for user id");
});

//post -users
router.post("/", (req, res) => {
    res.send("post for a user!");
});
//delete -users
router.delete("/:id", (req, res) => {
    res.send("delete for a user!");
});

module.exports = router;