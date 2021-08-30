const users = require("./users/users.service.js");
const reviews = require("./reviews/reviews.service.js");
const places = require("./places/places.service.js");
const menuItems = require('./menu-items/menu-items.service.js');
const menuGroups = require('./menu-groups/menu-groups.service.js');
const orders = require('./orders/orders.service.js');
const orderItems = require('./order-items/order-items.service.js');
const tables = require('./tables/tables.service.js');
const roles = require('./roles/roles.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(reviews);
  app.configure(places);
  app.configure(menuItems);
  app.configure(menuGroups);
  app.configure(orders);
  app.configure(orderItems);
  app.configure(tables);
  app.configure(roles);
};
