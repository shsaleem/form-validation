import mongoose from "mongoose";

const { Schema, model } = mongoose;

const userSchema = Schema({
  _id: Schema.Types.ObjectId,
  name: { type: String, required: true },
  surname: { type: String, required: true },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  confirmEmail: { type: String, required: true },
  passport: { type: String, required: true },
  password: { type: String, required: true },
  confirmPassword: { type: String, required: true },
});

export default model("User", userSchema);
