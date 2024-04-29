import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
      trim: true,
    },
    email: {
      type: String,
      require: true,
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      reqire: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("User", userSchema);
