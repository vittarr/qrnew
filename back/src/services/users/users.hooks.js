const { authenticate } = require("@feathersjs/authentication").hooks;

const { hashPassword, protect } =
  require("@feathersjs/authentication-local").hooks;

// GET permissions WIP !!!
const getRoles = async (context) => {
  const { app } = context;
  const { user } = context.params;
  const permissions = await app.service("roles").get({
    query: {
      userId: user.id,
    },
  });
  console.log(permissions);
  return permissions.permissions;
};

// SET permissions when creating user
const setRoles = async (context) => {
  const { app } = context;
  await app.service("roles").create({
    userId: context.result.id,
    permissions: context.data?.permissions || "user",
  });
};

module.exports = {
  before: {
    all: [],
    find: [authenticate("jwt")],
    get: [authenticate("jwt")],
    create: [hashPassword("password")],
    update: [hashPassword("password"), authenticate("jwt")],
    patch: [hashPassword("password"), authenticate("jwt")],
    remove: [authenticate("jwt")],
  },

  after: {
    all: [
      // Make sure the password field is never sent to the client
      // Always must be the last hook
      protect("password"),
    ],
    find: [],
    get: [],
    create: [setRoles],
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
