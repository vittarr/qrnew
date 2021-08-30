// Initializes the `orderItems` service on path `/order-items`
const { OrderItems } = require('./order-items.class');
const createModel = require('../../models/order-items.model');
const hooks = require('./order-items.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/order-items', new OrderItems(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('order-items');

  service.hooks(hooks);
};
