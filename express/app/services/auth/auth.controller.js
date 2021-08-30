const signup = (req, res) => {
  res.render("signup");
};
const signin = (req, res) => {
  res.render("signin");
};
const logout = (req, res) => {
  req.session.destroy((err) => {
    res.redirect("/");
  });
};
const dashboard = (req, res) => {
  res.render("dashboard");
};

module.exports = {
  signin,
  signup,
  logout,
  dashboard,
};
