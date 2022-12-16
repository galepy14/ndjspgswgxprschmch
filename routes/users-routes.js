const express = require("express");
const routes = express.Router();
const { findAllUsers, createUsers, findUsersByID, updateUsers, removeUsers } = require("../controllers/users-controller");


/**
 *  @swagger
 *  components:
 *      schemas:
 *          Users:
 *              type: object
 *              properties:
 *                  username:
 *                      type: string
 *                      description: enter your username
 *                      example: krqs92
 *                  password:
 *                      type: string
 *                      description: enter your password
 *                      example: $ijg45743
 *                  email:
 *                      type: string
 *                      description: enter your email
 *                      example: krqs@mail.com.py
 */

/**
 *  @swagger
 *  /api/users:
 *      get: 
 *          tags:
 *              - Users
 *          summary: Retrieve a list of users
 *          description: Retrieve a list of task from users table
 *          responses:
 *              200:
 *                  description: A list of users.
 *                  content: 
 *                      application/json:
 *                          schema:
 *                              type: object
 *                              properties:
 *                                  description:
 *                                      type: string
 *                                      example: Successfully fetched all data!.
 *                                  data:
 *                                      type: array
 *                                      items:
 *                                          $ref: '#/components/schemas/Users'
 */

routes.get("/", findAllUsers);
routes.get("/:id", findUsersByID);
routes.post("/", createUsers);
routes.patch("/:id", updateUsers);
routes.delete("/:id", removeUsers);

module.exports = routes;
