const express = require("express");
const app = express();
const user = require("./routes/user.js");
const post = require("./routes/post.js");
const session = require("express-session");
const flash = require("connect-flash");
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

const sessionOptions = {
    secret: "mysupersecret",
    resave: false,
    saveUninitialized: false
}

app.use(session(sessionOptions));
app.use(flash());

app.use((req, res, next) => {
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    next();
});

app.get("/register", (req, res) => {
    let { name = "anonymous" } = req.query;
    req.session.name = name;

    if (name === "anonymous") {
        req.flash("error", "User not registered");
    } else {
        req.flash("success", "User Successfully registered");
    }
    res.redirect("/hello");
});

app.get("/hello", (req, res) => {
    
    res.render("page.ejs", { name: req.session.name });
});


// app.get("/reqcount", (req, res) => {
//     if (req.session.count) {
//         req.session.count++;
//     } else{
//         req.session.count = 1;
//     }

//     res.send(`You sent a request ${req.session.count} times`);
// });


// app.get("/test", (req, res) => {
//     res.send("test successfull");
// });

app.listen(3000, () => {
    console.log("Server running on port 3000");
});












// const cookieParser = require("cookie-parser");
// const { verify } = require("crypto");

// app.use(cookieParser("secretcode"));

// //sedning signed cookie
// app.get("/getsignedcookie", (req, res) => {
//     res.cookie("made-in", "India", {signed: true});
//     res.send("sent you a signed cookie");
// });
// //verifying signed cookie
// app.get("/verify", (req, res) => {
//     console.log(req.signedCookies);
//     res.send("verify");
// });


// app.get("/getcookies", (req, res) =>{
//     res.cookie("greet", "Namste");
//     res.cookie("madein", "India");
//     res.send("sent you some Cookies");
// });

// app.get("/greet", (req, res) =>{
//     let {name = "anonymous"} = req.cookies;
//     res.send(`hi ${name}`);
// });

// app.get("/", (req, res) => {
//     console.dir(req.cookies);
//     res.send("Hi i am root!");
// });

// app.use("/users",user);
// app.use("/posts",post);



