// src/store/services/users.js
import feathersClient, { makeServicePlugin, BaseModel } from "@/helpers/feathers";

class Review extends BaseModel {
  constructor(data, options) {
    super(data, options);
  }
  // Required for $FeathersVuex plugin to work after production transpile.
  static modelName = "Review";
  // Define default properties here
  static instanceDefaults() {
    return {
      score: "",
      comment: "",
      placeId: "",
    };
  }
}
const servicePath = "reviews";
const servicePlugin = makeServicePlugin({
  Model: Review,
  service: feathersClient.service(servicePath),
  servicePath,
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
