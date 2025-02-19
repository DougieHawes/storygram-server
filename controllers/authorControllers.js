import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import { Filter } from "bad-words";

import Author from "../models/AuthorModel.js";

export const signupAuthor = async (req, res) => {
  try {
    const { authorName, email, password, confirmPassword } = req.body;

    const filter = new Filter();

    const hasUppercase = (str) => /[A-Z]/.test(str);
    const hasLowercase = (str) => /[a-z]/.test(str);
    const hasNumber = (str) => /\d/.test(str);
    const isLongEnough = (str, num) => str.length >= num;

    const passwordsMatch = password === confirmPassword;
    const passwordUpper = hasUppercase(password);
    const passwordLower = hasLowercase(password);
    const passwordNumber = hasNumber(password);
    const passwordLong = isLongEnough(password, 8);
    const AuthorNameLong = isLongEnough(authorName, 6);
    const emailExists = await Author.findOne({ email });
    const authorNameExists = await Author.findOne({ authorName });
    const isInflamatory = filter.isProfane(authorName);

    const errorArray = [];

    if (!passwordsMatch) errorArray.push("your passwords do not match");
    if (!passwordUpper)
      errorArray.push("your password needs an uppercase character");
    if (!passwordLower)
      errorArray.push("your password needs an lowercase character");
    if (!passwordNumber) errorArray.push("your password needs a number");
    if (!passwordLong)
      errorArray.push("your password should be at least 8 characters long");
    if (!AuthorNameLong)
      errorArray.push("your author name should be at least 6 characters long");
    if (emailExists) errorArray.push("please use another email");
    if (authorNameExists) errorArray.push("authorname taken");
    if (isInflamatory) errorArray.push("please avoid inflamatory words");

    if (errorArray.length > 0) res.status(400).json({ errors: errorArray });

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newAuthor = new Author({
      authorName,
      email,
      password: hashedPassword,
    });

    await newAuthor.save();

    res.status(200).json({ msg: "signupAuthor" });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

export const signinAuthor = async (req, res) => {
  try {
    const { authorName, password } = req.body;

    if (!authorName || !password) {
      return res.status(400).json({ msg: "fill in both fields" });
    }

    const author = await Author.findOne({ authorName });

    const isMatch = await bcrypt.compare(password, author.password);

    if (!author || !isMatch) {
      return res.status(400).json({ msg: "invalid credentials" });
    }

    const token = jwt.sign(
      { id: author._id, authorName: author.authorName },
      process.env.JWT_SECRET,
      { expiresIn: "30d" }
    );

    res.status(200).json({
      token,
      author: {
        id: author._id,
        authorName: author.authorName,
      },
    });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

export const readAuthor = (req, res) => {
  const { authorId } = req.params;
  res.status(200).json({ msg: `readAuthor - ${authorId}` });
};

export const updateAuthor = (req, res) => {
  const { authorId } = req.params;
  res.status(200).json({ msg: `updateAuthor - ${authorId}` });
};

export const deleteAuthor = (req, res) => {
  const { authorId } = req.params;
  res.status(200).json({ msg: `deleteAuthor - ${authorId}` });
};
