const express = require("express");
const routes = express.Router();
const { findAllUsers, createUsers, findUsersByID, updateUsers, removeUsers } = require("../controllers/users-controller");

routes.get("/", findAllUsers);
routes.get("/:id", findUsersByID);
routes.post("/", createUsers);
routes.patch("/:id", updateUsers);
routes.delete("/:id", removeUsers);

module.export = routes;