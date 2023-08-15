const { Router } = require('express');

const authenticator = require("../middleware/authenticator");
const carController = require('../controllers/car.js');

const postRouter = Router();

postRouter.get("/", authenticator, carController.index);
postRouter.post("/", carController.create);
postRouter.get("/:id", carController.show);
postRouter.delete("/:id", carController.destroy);

module.exports = carController;