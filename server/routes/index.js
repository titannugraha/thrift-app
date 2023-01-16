const { Router } = require("express");

const route = Router();

route.get("/", (req, res) => {
  res.json({
    message: `Server Page`,
  });
});

const itemRoutes = require("./item");
route.use("/items", itemRoutes);

const brandRoutes = require("./brand");
route.use("/brands", brandRoutes);

const userRoutes = require("./user");
route.use("/users", userRoutes);

module.exports = route;
