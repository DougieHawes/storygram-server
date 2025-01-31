import multer from "multer";

import Story from "../models/storyModel.js";

export const createStory = async (req, res) => {
  try {
    const { title, images, tags, story } = req.body;

    const processTags = (input) => {
      return input
        .split(",")
        .map((tag) => tag.trim())
        .filter((tag) => !tag.includes(" "))
        .sort((a, b) => a.localeCompare(b))
        .map((tag) => `#${tag}`);
    };

    const tagArray = await processTags(tags);

    const newStory = new Story({
      title,
      tags: tagArray,
      story,
    });

    await newStory.save();

    res.status(200).json({ masg: "story saved" });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};

export const getStories = (req, res) => {
  res.status(200).json({ msg: "get stories" });
};

export const getStory = (req, res) => {
  res.status(200).json({ msg: `get story ${res.params.storyid}` });
};

export const updateStory = (req, res) => {
  res.status(200).json({ msg: `update story ${res.params.storyid}` });
};

export const deleteStory = (req, res) => {
  res.status(200).json({ msg: `delete story ${res.params.storyid}` });
};
