const { User } = require("../models");
const { decrypt } = require("../helpers/bcrypt");
const { tokenGenerator } = require("../helpers/jsonwebtoken");

class UserController {
  static async get(req, res) {
    try {
      let result = await User.findAll({
        order: [["name", "asc"]],
      });
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  static async create(req, res) {
    try {
      const { name, password } = req.body;

      let result = await User.create({
        name,
        password,
      });
      res.status(201).json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  

  static async login(req, res) {
    try {
      const { name, password } = req.body;
      let foundName = await User.findOne({
        where: {
          name,
        },
      });

      if (foundName) {
        if (decrypt(password, foundName.password)) {
          let acces_token = tokenGenerator(foundName);
          // console.log(acces_token);
          res.status(200).json({
            acces_token,
          });
        } else {
          res.status(403).json({
            message: "username and password not found !",
          });
        }
      } else {
        res.status(404).json({
          message: "username and password not found !",
        });
      }
    } catch (err) {
      res.status(500).json(err);
    }
  }
  static async edit(req, res) {
    try {
      const id = +req.params.id;
      const { name, password } = req.body;

      let result = await User.update(
        {
          name,
          password,
        },
        {
          where: { id },
        }
      );
      res.status(201).json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async delete(req, res) {
    try {
      const id = +req.params.id;

      let result = await User.destroy({
        where: { id },
      });
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async getToken(req, res) {
    try {
      const result = req.userData

      res.status(200).json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}

module.exports = UserController;
