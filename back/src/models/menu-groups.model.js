// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require("sequelize");
const { nanoid } = require("nanoid");

const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get("sequelizeClient");
  const menuGroups = sequelizeClient.define(
    "menu_groups",
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
  menuGroups.associate = function (models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
    menuGroups.belongsTo(models.places);
    menuGroups.hasMany(models.menu_items);
  };

  return menuGroups;
};
