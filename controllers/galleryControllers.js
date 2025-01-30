import Gallery from "../models/galleryModel.js";

export const createGallery = (req, res) => {
  res.status(200).json({ msg: "create gallery" });
};

export const getGalleries = (req, res) => {
  res.status(200).json({ msg: "get galleries" });
};

export const getGallery = (req, res) => {
  res.status(200).json({ msg: `get gallery ${res.params.galleryid}` });
};

export const updateGallery = (req, res) => {
  res.status(200).json({ msg: `update gallery ${res.params.galleryid}` });
};

export const deleteGallery = (req, res) => {
  res.status(200).json({ msg: `delete gallery ${res.params.galleryid}` });
};
