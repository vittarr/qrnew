// https://code.tutsplus.com/ru/tutorials/using-passport-with-sequelize-and-mysql--cms-27537
const express = require("express");
const cors = require("cors");

const loger = require("morgan");
const passport = require("passport");
const session = require("express-session");
const exphbs = require("express-handlebars");
const path = require("path");

const env = require("dotenv");
const port = process.env.PORT || 3000;

const app = express();

//For Handlebars
app.set("views", "./app/views");
app.engine("hbs", exphbs({ extname: ".hbs" }));
app.set("view engine", ".hbs");

//For Logger
app.use(loger("dev"));

//For BodyParser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// For Passport
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// const ml = (req, res, next) => {
//   console.log(Object.keys(req));
//   console.log(req.sessionStore);
//   next();
// };
// app.use(ml);

//Models
var models = require("./app/models");

//Sync Database
models.sequelize
  .sync()
  .then(function () {
    console.log("Nice! Database looks fine");
  })
  .catch(function (err) {
    console.log(err, "Something went wrong with the Database Update!");
  });

//Routes
// require("./app/services/auth/auth.service.js")(app, passport);

require("./app/services")(app, passport);

//load passport strategies
require("./app/config/passport/passport.js")(passport, models.users);

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(port, (err) => {
  console.log(`Example app listening at http://localhost:${port}`);
});
