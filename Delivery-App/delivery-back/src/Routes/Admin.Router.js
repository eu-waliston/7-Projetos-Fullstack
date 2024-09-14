const express = require("express");
const { createAdmin, getAdmin } = require("../Controller/Admin.Controller");

const AdminRouter = express.Router();

AdminRouter.get("get-a-admin-router/:id", getAdmin);
AdminRouter.post("create-a-admin-router", createAdmin);

module.exports = AdminRouter;