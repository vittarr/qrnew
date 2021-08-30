// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require("sequelize");
const { nanoid } = require("nanoid");

const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get("sequelizeClient");
  const orderItems = sequelizeClient.define(
    "order_items",
    {
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
        defaultValue: () => nanoid(10),
      },
      qty: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      price: {
        type: DataTypes.FLOAT,
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
  orderItems.associate = function (models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
    orderItems.belongsTo(models.orders);
    orderItems.belongsTo(models.places);
  };

  return orderItems;
};
