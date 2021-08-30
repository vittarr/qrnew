const { authenticate } = require("@feathersjs/authentication").hooks;

const { setField } = require("feathers-authentication-hooks");
const checkPermissions = require("feathers-permissions");
const { allowAnonymous } = require("../myHooks");

const setUserId = setField({
  from: "params.user.id",
  as: "data.userId",
});
const limitToUser = setField({
  from: "params.user.id",
  as: "params.query.userId",
});

const getRoles = async (context) => {
  const { user } = context.params;
  const roles = await context.app.service("roles").find({
    query: {
      userId: user.id,
    },
  });
  return roles.data;
};

module.exports = {
  before: {
    all: [],
    find: [allowAnonymous(), authenticate("jwt", "anonymous")],
    get: [allowAnonymous(), authenticate("jwt", "anonymous")],
    create: [authenticate("jwt"), setUserId],
    update: [authenticate("jwt"), limitToUser],
    patch: [authenticate("jwt"), limitToUser],
    remove: [authenticate("jwt"), limitToUser],
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
