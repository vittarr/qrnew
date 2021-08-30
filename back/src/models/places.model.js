// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require("sequelize");
const { nanoid } = require("nanoid");

const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get("sequelizeClient");
  const places = sequelizeClient.define(
    "places",
    {
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
        defaultValue: () => nanoid(10),
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      address: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      facebook: {
        type: DataTypes.STRING,
      },
      instagram: {
        type: DataTypes.STRING,
      },
      web: {
        type: DataTypes.STRING,
      },
    },
    {
      hooks: {
        beforeCount(options) {
          options.raw = true;
        },
      },
    }
  );

  // eslint-disable-next-line no-unused-vars
  places.associate = function (models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
    places.belongsTo(models.users);
    places.hasMany(models.reviews);
    places.hasMany(models.tables);
    places.hasMany(models.menu_groups);
    places.hasMany(models.menu_items);
    places.hasMany(models.orders);
    places.hasMany(models.order_items);
    // console.log(Object.keys(models));
  };

  return places;
};
