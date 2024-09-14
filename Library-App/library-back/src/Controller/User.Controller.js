const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const auth = require("../../midleware/Auth");
const cors = require("cors");

const Author = require("../Model/Authors.Model");
const Editors = require('../Model/Editors.Model');
const Book = require("../Model/Books.Model");
const User = require("../Model/User.Model");



/**
    # API BODY USER

    first_name,
    last_name,
    email: ,
    password:
    token:

 */

const userRouter = express.Router();

async function CreateUser(req, res) {
    try {
        //get user input
        const { first_name, last_name, email, password } = req.body;

        //validate user input
        if (!email && !password && !first_name && !last_name) {
            res.status(400).send("All inputs is required..")
        }

        //check if user already exist
        //validate if user exist in our DB
        const oldUser = await User.findOne({ email });
        if (oldUser) {
            return res.status(409).send("User Already Exists. Please Login");
        }

        //encrypt password
        const encryptedUserPassword = await bcrypt.hash(password, 10);

        //create user in our DB
        const user = await User.create({
            first_name: first_name,
            last_name: last_name,
            email: email.toLowerCase(),
            password: password,
            token: encryptedUserPassword
        })

        //create a token
        const token = jwt.sign(
            { user_id: user._id, email },
            process.env.TOKEN_KEY,
            { expiresIn: "5h" }
        );

        //Save user token
        user.token = token;

        //return new user
        res.status(201).json(user);

    } catch (error) {
        console.log(error);
    }
}

async function RegisterUser(req, res) {
    try {
        //get user input
        const { email, password } = req.body;

        //validate user input
        if (!eamil && !password) {
            res.status(400).send("All input is required");
        }

        //validate if user exists in our DB
        const user = await User.findOne({ email });

        if (user && (await bcrypt.compare(password, user.password))) {
            //create a token
            const token = jwt.sign(
                { user_id: user._id, email },
                process.env.TOKEN_KEY,
                { expiresIn: "5h" }
            );

            //save user token
            user.token = token;

            //user
            return res.status(200).json(user);
        }

        return res.status(400).send("Invalid Credencials")
    } catch (error) {
        console.log({ message: error });
    }
}

async function GetUser(req,res) {
    let id = req.params.id;
    try {
        let user = await User.findById(id)
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json({ message: error })
    }
}

async function GetAllUsers(req,res) {
    try {
        let allUsers = await User.find();
        res.status(200).json(allUsers)
    } catch (error) {
        res.status(500).json({ message: error })
    }
}

async function UpdateUser(req,res) {
    try {
        let userUpdated = await User.updateOne(
            { _id: req.params.id },
            {
                $set: {
                    first_name: req.body.first_name,
                    last_name: req.body.last_name,
                    email: req.body.eamil,
                }
            }

        )
        res.status(200).json(userUpdated)
    } catch (error) {
        res.status(500).json({message: error})
    }
}

async function DeleteUser(req,res) {
    let id = req.params.id;
    try {
        await User.findByIdAndDelete(id)
        res.status(200).send("Operation Success...")
    } catch (error) {
        res.status(500).json({message: error})
    }
}
module.exports = {
    CreateUser,
    RegisterUser,
    GetUser,
    GetAllUsers,
    UpdateUser,
    DeleteUser
};