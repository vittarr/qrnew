// src/store/services/users.js
import feathersClient, { makeServicePlugin, BaseModel } from "@/helpers/feathers";

class MenuItems extends BaseModel {
  constructor(data, options) {
    super(data, options);
  }
  // Required for $FeathersVuex plugin to work after production transpile.
  static modelName = "MenuItem";
  // Define default properties here
  static instanceDefaults() {
    return {
      rank: "",
      name: "",
      description: "",
      weight: "",
      price: "",
      image: "",
    };
  }
}
const servicePath = "menu-items";
const servicePlugin = makeServicePlugin({
  Model: MenuItems,
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
