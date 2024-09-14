const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

require("dotenv").config();

const app = express();

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(helmet());

//routes
const rootView = require("./View/root.view");
const userView = require("./View/user.view");
const recipeView = require("./View/recipe.view");

app.use("/", rootView);
app.use("/", userView);
app.use("/", recipeView);

//DB Connection
require("../config/DB");

//Server
app.listen(process.env.PORT, () => {
  console.log(`Api Listening on PORT ${process.env.PORT}`);
});
