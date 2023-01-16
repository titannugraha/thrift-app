"use strict";
const { encrypt } = require("../helpers/bcrypt");

const { Model, STRING } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Item, { foreignKey: "userId" });
    }
  }
  User.init(
    {
      name: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            message: " name can't be empty !",
          },
        },
      },
      password: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            message: " password can't be empty !",
          },
        },
      },
    },
    {
      hooks: {
        beforeCreate: (user, option) => {
          user.password = encrypt(user.password);
        },
      },
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
