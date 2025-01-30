import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
  email: {
    type: String,
    require: true,
    trim: true,
  },
  username: {
    type: String,
    require: true,
    trim: true,
  },
  password: {
    type: String,
    require: true,
    trim: true,
  },
  avatar: {
    type: String,
  },
  subtitle: {
    type: String,
    trim: true,
  },
  bio: { type: String, trim: true },
});

const UserModel = mongoose.model("User", UserSchema);

export default UserModel;
