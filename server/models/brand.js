"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Brand extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Brand.hasMany(models.Item, { foreignKey: "brandId" });
    }
  }
  Brand.init(
    {
      name: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            message: "name must be inputed !",
          },
        },
      },
      address: DataTypes.STRING,
      image: DataTypes.STRING,
    },
    {
      hooks: {
        beforeCreate: (brand, option) => {
          brand.image = brand.image || "https://via.placeholder.com/150";
        },
      },
      sequelize,
      modelName: "Brand",
    }
  );
  return Brand;
};
