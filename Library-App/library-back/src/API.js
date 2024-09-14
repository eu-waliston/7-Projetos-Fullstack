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
const AuthorRouter = require("./View/Authors.View");
const BooksRouter = require("./View/Books.View");
const EditorsRouter = require("./View/Editors.View");
const LoanRouter = require("./View/Loan.View");
const UserRouter = require("./View/User.View");


App.use("/", AuthorRouter);
App.use("/", BooksRouter);
App.use("/", EditorsRouter);
App.use("/", LoanRouter);
App.use("/", UserRouter);

//Server Start
const PORT = 8000;
App.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});