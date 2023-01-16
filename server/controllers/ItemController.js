const { Item, Brand, User } = require("../models");
const { tokenVerifier } = require("../helpers/jsonwebtoken");
class ItemController {
  static async get(req, res) {
    try {
      let result = await Item.findAll(
        {
          include: [Brand, User],
        },
        {
          order: [["name"], ["asc"]],
        }
      );

      res.status(200).json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async create(req, res) {
    try {
      const { name, category, price, size, brandId } = req.body;
      const image = req.file.path;
      const userId = req.userData.id;
      let result = await Item.create({
        name,
        image,
        category,
        size,
        price,
        brandId,
        userId,
      });
      res.status(201).json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async edit(req, res) {
    try {
      const id = +req.params.id;
      const { name, category, price, size, userId, brandId } = req.body;
      const image = req.file.path;
      let result = await Item.update(
        {
          name,
          image,
          category,
          size,
          price,
          brandId,
          userId,
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

      let result = await Item.destroy({
        where: { id },
      });
      res.json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async detail(req, res) {
    try {
      const id = +req.params.id;

      let result = await Item.findOne({
        where: {
          id,
        },
        include: [Brand, User],
      });

      res.json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}

module.exports = ItemController;
