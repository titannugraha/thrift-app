"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Item.belongsTo(models.Brand, { foreignKey: "brandId" });
      Item.belongsTo(models.User, { foreignKey: "userId" });
    }
  }
  Item.init(
    {
      name: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            message: "name can't be empty !",
          },
        },
      },
      category: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            message: "category can't be empty !",
          },
        },
      },
      size: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            message: "size can't be empty !",
          },
        },
      },
      price: {
        type: DataTypes.INTEGER,
        validate: {
          notEmpty: {
            message: "price can't be empty !",
          },
        },
      },
      image: DataTypes.STRING,
      brandId: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
    },
    {
      hooks: {
        beforeCreate: (item, option) => {
          item.image = item.image || "https://via.placeholder.com/150";
        },
      },
      sequelize,
      modelName: "Item",
    }
  );
  return Item;
};
