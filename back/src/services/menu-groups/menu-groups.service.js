// Initializes the `menuGroups` service on path `/menu-groups`
const { MenuGroups } = require('./menu-groups.class');
const createModel = require('../../models/menu-groups.model');
const hooks = require('./menu-groups.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/menu-groups', new MenuGroups(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('menu-groups');

  service.hooks(hooks);
};
