const { authenticate } = require("@feathersjs/authentication").hooks;

const { allowAnonymous, setPlace } = require("../myHooks");

module.exports = {
  before: {
    all: [setPlace],
    find: [allowAnonymous(), authenticate("jwt", "anonymous")],
    get: [allowAnonymous(), authenticate("jwt", "anonymous")],
    create: [authenticate("jwt", "anonymous")],
    update: [authenticate("jwt", "anonymous")],
    patch: [authenticate("jwt", "anonymous")],
    remove: [authenticate("jwt", "anonymous")],
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
};
