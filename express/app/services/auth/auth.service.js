var authController = require("./auth.controller.js");

module.exports = (app, passport) => {
  app.get("/signup", authController.signup);
  app.get("/signin", authController.signin);

  app.post(
    "/signup",
    passport.authenticate("local-signup", {
      successRedirect: "/dashboard",
      failureRedirect: "/signup",
    })
  );

  app.post(
    "/signin",
    passport.authenticate("local-signin", {
      successRedirect: "/dashboard",
      failureRedirect: "/signin",
    })
  );

  app.get("/logout", authController.logout);

  app.get("/dashboard", isLoggedIn, authController.dashboard);

  function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/signin");
  }
};
