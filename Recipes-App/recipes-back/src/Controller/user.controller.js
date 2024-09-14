const User = require("../Model/user");
require("dotenv").config();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

async function getAllUsers(req, res) {
  try {
    const allUsers = await User.find();
    res.json(allUsers);
  } catch (error) {
    res.json({ message: error });
  }
}

async function getAnUser(req, res) {
  try {
    const userById = await User.findById(req.params.id);
    res.json(userById);
  } catch (error) {
    res.json({ message: error });
  }
}

async function createAuser(req, res) {
  // const newUser = new User({
  //   username: req.body.username,
  //   password: req.body.password,
  //   email: req.body.email,
  //   dateNasc: req.body.dateNasc,
  //   role: req.body.role,
  // });

  // try {
  //   const saveUser = await newUser.save();
  //   res.json(saveUser);
  // } catch (error) {
  //   res.json({ message: error });
  // }

  const { username, password, email, dateNasc, role } = req.body;

  if (password.length < 0) {
    return res.status(400).json({
      message: "Password less than 6 characters",
    });
  }

  bcrypt.hash(password, 10).then(async (hash) => {
    await User.create({
      username,
      password: hash,
      email,
      dateNasc,
      role,
    })
      .then((user) => {
        const maxAge = 3 * 60 * 60;
        const token = jwt.sign(
          { id: user._id, username, role: user.role },
          process.env.JWT_SECRET,
          {
            expiresIn: maxAge,
          }
        );
        res.cookie("jwt", token, {
          httoOnly: true,
          maxAge: maxAge * 1000,
        });
        res.status(200).json({
          message: "User sucessfully created",
          user,
        });
      })
      .catch((error) => {
        res.status(400).json({
          message: "User not sucessfully created",
          error: error.message,
        });
      });
  });
}

async function updatedUser(req, res) {
  try {
    await Recipe.updateOne(
      { _id: req.params.id },
      {
        $set: {
          username: req.body.username,
          password: req.body.password,
          email: req.body.email,
          dateNasc: req.body.dateNasc,
        },
      }
    );

    let updated = Recipe.findById(req.body.id);
    res.status(200).json(updated);
  } catch (error) {}
}

async function deleteAuser(req, res) {
  let id = req.params.id;
  try {
    await User.findByIdAndDelete(id);
    res.send("User successfully delected! ");
  } catch (error) {
    res.json({ message: error });
  }
}

async function loginWithUser(req, res) {
  let username = req.body.username;

  const UserP = User.findOne({
    username: req.body.username,
  });

  try {
    if (username === UserP) {
      res.redirect("/");
    }
  } catch (error) {
    res.json({ message: error });
  }
}

module.exports = {
  getAllUsers,
  getAnUser,
  createAuser,
  updatedUser,
  deleteAuser,
  loginWithUser,
};
