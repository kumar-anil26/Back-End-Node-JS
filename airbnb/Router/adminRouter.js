//core module
const express = require("express");
const adminController  = require("../Controller/adminController");

const adminRouter = express.Router();

adminRouter.get("/", adminController.getHomeList);

exports.adminRouter = adminRouter;
