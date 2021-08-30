// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require("sequelize");
const { nanoid } = require("nanoid");

const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get("sequelizeClient");
  const menuItems = sequelizeClient.define(
    "menu_items",
    {
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
        defaultValue: () => nanoid(10),
      },
      rank: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
      },
      weight: {
        type: DataTypes.STRING,
      },
      price: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      image: {
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
  menuItems.associate = function (models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
    menuItems.belongsTo(models.places);
    menuItems.belongsTo(models.menu_groups);
  };

  return menuItems;
};
