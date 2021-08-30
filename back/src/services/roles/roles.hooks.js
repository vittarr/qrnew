const { disallow } = require("feathers-hooks-common");

const { setField } = require("feathers-authentication-hooks");

const setUserId = setField({
  from: "params.user.id",
  as: "data.userId",
});
const limitToUser = setField({
  from: "params.user.id",
  as: "params.query.userId",
});

module.exports = {
  before: {
    all: [disallow("external")],
    find: [limitToUser],
    get: [limitToUser],
    create: [setUserId],
    update: [limitToUser],
    patch: [limitToUser],
    remove: [limitToUser],
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
