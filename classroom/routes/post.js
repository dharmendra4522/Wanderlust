const express = require("express");
const router = express.Router();


//post
//Index 
router.get("/", (req, res) => {
    res.send("Get for post");
});

//Show 
router.get("/:id", (req, res) => {
    res.send("Get for post id");
});

//post 
router.post("/", (req, res) => {
    res.send("post for a post!");
});
//delete 
router.delete("/:id", (req, res) => {
    res.send("delete for a post id!");
});

module.exports = router;