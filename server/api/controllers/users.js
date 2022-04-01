import mongoose from "mongoose";

import User from "../models/user.js";

// Get all users
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({
      totalUsers: users.length,
      users,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

//Create User
const createUser = async (req, res) => {
  const user = await new User({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    surname: req.body.surname,
    email: req.body.email,
    confirmEmail: req.body.confirmEmail,
    passport: req.body.passport,
    password: req.body.password,
    confirmPassword: req.body.confirmPassword,
  });

  try {
    const createdUser = await user.save();
    res.status(201).json({
      message: "User created successfully",
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

//Delete user
const deleteUser = async (req, res, next) => {
  const { userId } = req.params;

  try {
    const deletedUser = await User.deleteOne({ _id: userId });
    res.status(200).json({
      message: "User deleted",
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export { getAllUsers, createUser, deleteUser };
