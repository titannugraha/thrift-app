const { Router } = require("express");

const userRoutes = Router();
const { UserController } = require("../controllers");
const { authToken } = require("../middlewares/auth");

userRoutes.get("/", UserController.get);
userRoutes.post("/create", UserController.create);
userRoutes.post("/login", UserController.login);
userRoutes.put("/edit/:id", UserController.edit);
userRoutes.delete("/delete/:id", UserController.delete);
userRoutes.get("/get/", authToken, UserController.getToken);

module.exports = userRoutes;
