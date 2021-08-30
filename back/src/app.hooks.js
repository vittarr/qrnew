// Application hooks that run for every service

module.exports = {
  before: {
    all: [
      (context) => {
        console.log(
          `Before in '${context.path}' service method '${context.method}'`,
          "data",
          context.data,
          "query",
          context.query,
          "params",
          context.params
        );
      },
    ],
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
    all: [
      (context) => {
        console.error(
          `Error in '${context.path}' service method '${context.method}'`,
          context.error.stack
        );
      },
    ],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: [],
  },
};
