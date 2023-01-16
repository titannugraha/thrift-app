const { Router } = require("express");
const itemRoutes = Router();
const { ItemController } = require("../controllers");
const { upload } = require("../middlewares/multer");
const { authToken } = require("../middlewares/auth");

itemRoutes.get("/", ItemController.get);
itemRoutes.post("/create", upload, authToken, ItemController.create);
itemRoutes.put("/edit/:id", upload, ItemController.edit);
itemRoutes.delete("/delete/:id", ItemController.delete);
itemRoutes.get("/details/:id", ItemController.detail);

module.exports = itemRoutes;
