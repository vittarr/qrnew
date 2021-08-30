/* eslint-disable require-atomic-updates */
const allowAnonymous = (options = {}) => {
  // eslint-disable-line no-unused-vars
  return async (context) => {
    const { params } = context;

    if (params.provider && !params.authentication) {
      context.params = {
        ...params,
        authentication: {
          strategy: "anonymous",
        },
      };
    }

    return context;
  };
};

const setPlace = () => {
  const { query } = context;
  context.data.placeId = query.place;
  return context;
};

module.exports = {
  allowAnonymous,
  setPlace,
};
