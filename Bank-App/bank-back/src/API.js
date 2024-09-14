const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
require("dotenv").config();

const userRouter = require("./View/user.view");

const API = express()

//DB Connection
require("../config/DATABASE");

//Middlwares
API.use(cors());
API.use(helmet());
API.use(express.urlencoded({extended: true}));
API.use(express.json());

//Routes
API.use("/", userRouter);

//Server
API.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
})