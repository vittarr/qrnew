// src/store/services/users.js
import feathersClient, { makeServicePlugin, BaseModel } from "@/helpers/feathers";

class OrderItems extends BaseModel {
  constructor(data, options) {
    super(data, options);
  }
  // Required for $FeathersVuex plugin to work after production transpile.
  static modelName = "OrderItem";
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
const servicePath = "order-items";
const servicePlugin = makeServicePlugin({
  Model: OrderItems,
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
