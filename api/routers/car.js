const { Router } = require('express');

const authenticator = require("../middleware/authenticator");
const carController = require('../controllers/car.js');

const carRouter = Router();

carRouter.get("/", authenticator, carController.index);
carRouter.post("/", carController.create);
carRouter.get("/:id", carController.show);
carRouter.delete("/:id", carController.destroy);

module.exports = carRouter;