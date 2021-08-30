// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require("sequelize");
const { nanoid } = require("nanoid");

const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get("sequelizeClient");
  const tables = sequelizeClient.define(
    "tables",
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
  tables.associate = function (models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
    tables.belongsTo(models.places);
    tables.hasMany(models.orders);
  };

  return tables;
};
