const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const App = express();

//Db Connection
require("../Config/DB_Connection");

//Midlewares
App.use(express.json());
App.use(express.urlencoded({ extended: true }));
App.use(cors());
App.use(helmet());

//Routes
const PostRouter = require("./View/Post.View");


App.use("/", PostRouter);

//Server Start
const PORT = 8000;
App.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});