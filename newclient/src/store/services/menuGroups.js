// src/store/services/users.js
import feathersClient, { makeServicePlugin, BaseModel } from "@/helpers/feathers";

class MenuGroups extends BaseModel {
  constructor(data, options) {
    super(data, options);
  }
  // Required for $FeathersVuex plugin to work after production transpile.
  static modelName = "MenuGroup";
  // Define default properties here
  static instanceDefaults() {
    return {
      name: "",
      description: "",
      address: "",
      facebook: "",
      web: "",
    };
  }
}
const servicePath = "menu-groups";
const servicePlugin = makeServicePlugin({
  Model: MenuGroups,
  service: feathersClient.service(servicePath),
  servicePath,
  debug: true,
});

// Setup the client-side Feathers hooks.
feathersClient.service(servicePath).hooks({
  before: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },
  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },
  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },
});

export default servicePlugin;
