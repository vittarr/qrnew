const auth = require("./auth/auth.service.js");

module.exports = (app, passport) => {
  auth(app, passport);
};
