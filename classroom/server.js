const express = require("express");
const app = express();
const user = require("./routes/user.js");
const post = require("./routes/post.js");
const cookieParser = require("cookie-parser");
const { verify } = require("crypto");

app.use(cookieParser("secretcode"));

//sedning signed cookie
app.get("/getsignedcookie", (req, res) => {
    res.cookie("made-in", "India", {signed: true});
    res.send("sent you a signed cookie");
});
//verifying signed cookie
app.get("/verify", (req, res) => {
    console.log(req.signedCookies);
    res.send("verify");
});


app.get("/getcookies", (req, res) =>{
    res.cookie("greet", "Namste");
    res.cookie("madein", "India");
    res.send("sent you some Cookies");
});

app.get("/greet", (req, res) =>{
    let {name = "anonymous"} = req.cookies;
    res.send(`hi ${name}`);
});

app.get("/", (req, res) => {
    console.dir(req.cookies);
    res.send("Hi i am root!");
});

app.use("/users",user);
app.use("/posts",post);

app.listen(3000, () => {
    console.log("Server running on port 3000");
});