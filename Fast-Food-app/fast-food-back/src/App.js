const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
require("dotenv").config();

const App = express();

const PORT = process.env.PORT;

//DB Connection
require("../config/DB_Connection");

//Midlewares
App.use(express.json());
App.use(express.urlencoded({ extended: true }));
App.use(cors());
App.use(helmet());

//Routes
const AdminRouter = require("./View/Admin.Vew");
const CartRouter = require("./View/Cart.View");
const FoodRouter = require("./View/Cart.View");
const ReserveRouter = require("./View/Reserve.View");

App.use("/", AdminRouter);
App.use("/", CartRouter);
App.use("/", FoodRouter);
App.use("/", ReserveRouter);

//Server Start
App.listen(process.envPORT, () => {
  console.log(`Server running on PORT ${process.env.PORT}`);
});
