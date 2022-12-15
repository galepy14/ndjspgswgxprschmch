const AsyncHandler = require("express-async-handler");
const Users = require("../model/Users");

const findAllUsers = AsyncHandler(async (req, res) => {
    const usersList = await Users.findAll();

    req.status(200).json({
        description : "Successfully fetched user data!.",
        data: usersList
    });
});

const createUsers = AsyncHandler(async (req, res) => {
    if(!req.body.username){
        res.status(400).json({
            description: "Bad request, username must be filled, this field is required!."
        })
    }
    if(!req.body.password){
        res.status(400).json({
            description: "Bad request, password must be filled, this field is required!."
        })
    }
    if(!req.body.email){
        res.status(400).json({
            description: "Bad request, email must be filled, this field is required!."
        })
    }
    const users_map = {
        username: req.body.username,
        password: req.body.password,
        email: req.body.email
    };
    const users = await Users.create(users_map);
    res.status(200).json({
        description: "Successfully saved user data!."
    });
});

const findUsersByID = AsyncHandler(async (req, res) => {
    const user = await Users.findByPk(req.params.id);
    req.status(200).json({
        description : `Successfully fetch by id: ${req.params.id} user data!.`,
        data: user
    });
});

const updateUsers = AsyncHandler(async (req, res) => {
    const user = await Users.update(req.body,{
        where: {id: req.params.id}
    });
    req.status(200).json({
        //description : `Successfully updated by id: ${req.params.id} user data!.`,
        description : `Successfully updated user data!.`,
        data: user
    });
});

const removeUsers = AsyncHandler(async (req, res) => {
    const user = await Users.destoy({
        where: {id: req.params.id}
    });
    req.status(200).json({
        //description : `Successfully updated by id: ${req.params.id} user data!.`,
        description : `Successfully deleted user data!.`,
        data: user
    });
});

module.exports = {findAllUsers, createUsers, findUsersByID, updateUsers, removeUsers}