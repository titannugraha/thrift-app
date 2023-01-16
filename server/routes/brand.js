const { Router } = require("express");

const brandRoutes = Router();
const { BrandController } = require("../controllers");
const { upload } = require("../middlewares/multer");

brandRoutes.get("/", BrandController.get);
brandRoutes.post("/create", upload, BrandController.create);
brandRoutes.put("/edit/:id", upload, BrandController.edit);
brandRoutes.delete("/delete/:id", BrandController.delete);
brandRoutes.get("/details/:id", BrandController.detail);

module.exports = brandRoutes;
