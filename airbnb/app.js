//Core module
const path = require("path");
//External module
const express = require("express");
const ejs = require("ejs");

const { adminRouter } = require("./Router/adminRouter");
const rootDir = require("./utils/rootDir");
const { userRouter } = require("./Router/userRouter");
const errorController = require("./Controller/errorController");

const app = express();

app.use(express.urlencoded());
app.use(express.static(path.join(rootDir, "public")));
app.set("view engine", "ejs");
app.set("views", "views");

app.use(adminRouter);
app.use("/user", userRouter);

app.use(errorController.getError);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
