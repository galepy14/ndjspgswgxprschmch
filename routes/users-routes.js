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

routes.get("/", findAllUsers);
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

routes.get("/:id", findUsersByID);
/**
 *  @swagger
 *  /api/users/{id}:
 *      get: 
 *          tags:
 *              - Users
 *          summary: Retrieve a user by ID
 *          description: Retrieve a row from users table by ID
 *          parameters:
 *              - name: id
 *                in: path
 *                required: true
 *                description: User id
 *                schema:
 *                  type: integer
 *                  format: int64
 *          responses:
 *              200:
 *                  description: Single user data.
 *                  content: 
 *                      application/json:
 *                          schema:
 *                              type: object
 *                              properties:
 *                                  description:
 *                                      type: string
 *                                      example: Successfully fetched user data by id!.
 *                                  data:
 *                                      type: array
 *                                      items:
 *                                          $ref: '#/components/schemas/Users'
 */

routes.post("/", createUsers);
/** 
 *  @swagger
 *  /api/users/:
 *      post:
 *          tags:
 *              - Users
 *          description: Create a Single User
 *          summary: Create users data
 *          requestBody:
 *              required: true
 *              content: 
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties: 
 *                              username:
 *                                  type: string
 *                                  description: enter your username
 *                                  example: krqs92
 *                              password:
 *                                  type: string
 *                                  description: enter your password
 *                                  example: $ijg45743
 *                              email:
 *                                  type: string
 *                                  description: enter your email
 *                                  example: krqs@mail.com.py
 *          responses:
 *              200:
 *                  description: User created successfully!.
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: object
 *                              properties:
 *                                  description: 
 *                                      type: string
 *                                      example: Successfully created user!.
*/

routes.patch("/:id", updateUsers);
/** 
 *  @swagger
 *  /api/users/{id}:
 *      patch:
 *          tags:
 *              - Users
 *          description: Update users table by ID
 *          summary: Update users data
 *          parameters:
 *              - name: id
 *                in: path
 *                required: true
 *                description: User id
 *                schema:
 *                  type: integer
 *                  format: int64
 *          requestBody:
 *              required: true
 *              content: 
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties: 
 *                              username:
 *                                  type: string
 *                                  description: enter your username
 *                                  example: krqs92
 *                              password:
 *                                  type: string
 *                                  description: enter your password
 *                                  example: $ijg45743
 *                              email:
 *                                  type: string
 *                                  description: enter your email
 *                                  example: krqs@mail.com.py
 *          responses:
 *              200:
 *                  description: User updated successfully!.
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: object
 *                              properties:
 *                                  description: 
 *                                      type: string
 *                                      example: Successfully updated user!.
*/

routes.delete("/:id", removeUsers);
/** 
 *  @swagger
 *  /api/users/{id}:
 *      delete:
 *          tags:
 *              - Users
 *          description: Delete users table by ID
 *          summary: Delete users data
 *          parameters:
 *              - name: id
 *                in: path
 *                required: true
 *                description: User id
 *                schema:
 *                  type: integer
 *                  format: int64
 *          responses:
 *              200:
 *                  description: User deleted successfully!.
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: object
 *                              properties:
 *                                  description: 
 *                                      type: string
 *                                      example: Successfully deleted user!.
*/

module.exports = routes;
