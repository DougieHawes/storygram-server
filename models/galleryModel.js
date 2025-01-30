import mongoose from "mongoose";

const GallerySchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  images: {
    type: [String],
    required: true,
  },
  tags: {
    type: [String],
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const GalleryModel = mongoose.model("Gallery", GallerySchema);

export default GalleryModel;
