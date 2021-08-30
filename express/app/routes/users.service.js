const users = require("../controllers/users.controller.js");

module.exports = (app) => {
  app.post("/users", users.create);
  app.get("/users", users.find);
  app.get("/users/:id", users.get);
  app.post("/users/:id", users.patch);
  app.delete("/users/:id", users.remove);
};
