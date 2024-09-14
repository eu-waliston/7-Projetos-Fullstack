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
const AdminRouter = require("./Routes/Admin.Router");
const OrderRouter = require("./Routes/Order.Router");
const ProductRouter = require("./Routes/Product.Router");

App.use("/", AdminRouter);
App.use("/", OrderRouter);
App.use("/", ProductRouter);


//Server Start
App.listen(process.envPORT, () => {
  console.log(`Server running on PORT ${process.env.PORT}`);
});
