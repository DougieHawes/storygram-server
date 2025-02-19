import mongoose from "mongoose";

const AuthorSchema = mongoose.Schema({
  authorName: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
  gender: {
    type: String,
  },
  pronouns: {
    type: String,
  },
  avatar: {
    type: String,
  },
  role: {
    type: String,
    default: "author",
  },
});

const AuthorModel = mongoose.model("Author", AuthorSchema);

export default AuthorModel;
