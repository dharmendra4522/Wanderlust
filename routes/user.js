const express = require("express");
const router = express.Router();
const User = require("../models/user.js");
const wrapAsync = require("../utils/wrapAsync");
const passport = require("passport");

router.get("/signup", (req, res) => {
    res.render("users/signup.ejs");
});

router.post("/signup", wrapAsync(async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const newUser = new User({ email, username });
        const registeredUser = await User.register(newUser, password);
        req.flash("success", "Welcome to Wanderlust!");
        console.log(registeredUser);
        res.redirect("/listings");
    } catch (err) {
        req.flash("error", err.message);
        res.redirect("/signup");
    }
})
);

router.get("/login", (req, res) => {
    res.render("users/login.ejs");
});

router.post("/login", passport.authenticate("local", { failureFlash: true, failureRedirect: "/login" }), async (req, res) => {
    req.flash("success", "Welcome back Wanderlust!");
    res.redirect("/listings");

});



module.exports = router;