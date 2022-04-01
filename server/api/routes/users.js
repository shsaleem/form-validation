import express from "express";
const router = express.Router();

import { getAllUsers, createUser, deleteUser } from "../controllers/users.js";
import { userValidation, validation } from "../middleware/userValidation.js";

router.get("/", getAllUsers);

router.post("/signup", userValidation, validation, createUser);

router.delete("/:userId", deleteUser);

export default router;
