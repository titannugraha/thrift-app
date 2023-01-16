const { Brand } = require("../models");

class BrandController {
  static async get(req, res) {
    try {
      let result = await Brand.findAll({
        order: [["name", "asc"]],
      });
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  static async create(req, res) {
    try {
      const { name, address } = req.body;
      const image = req.file.path;
      let result = await Brand.create({
        image,
        name,
        address,
      });

      res.status(201).json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  static async edit(req, res) {
    try {
      const id = +req.params.id;
      const { name, address } = req.body;
      const image = req.file.path;

      let result = await Brand.update(
        {
          name,
          address,
          image,
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

      let result = await Brand.destroy({
        where: { id },
      });
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  static async detail(req, res) {
    try {
      const id = +req.params.id;

      let result = await Brand.findByPk(id);

      res.status(200).json(result);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}

module.exports = BrandController;
