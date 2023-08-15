const express = require('express');
const cors = require('cors');

const logRoutes = require('./middleware/logger');
const userRouter = require('./routers/user');
const carRouter = require('./routers/car');

const api = express();

api.use(cors());
api.use(express.json());
api.use(logRoutes);

api.get("/", (req, res) => {
    res.json({
        name: "Car showroom",
        description: "View and add cars to the showroom."
    })
})


api.use("/users", userRouter);
api.use("/cars", carRouter);

module.exports = api;