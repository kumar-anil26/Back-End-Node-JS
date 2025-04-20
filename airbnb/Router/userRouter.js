//core module
const express = require("express");
const userController = require("../Controller/userController");

const userRouter = express.Router();

userRouter.get("/add-home", userController.getAddHome);
userRouter.post("/added-home-list", userController.getHomeList);
userRouter.get('/booking-home', userController.getBookingHome);

exports.userRouter = userRouter;
