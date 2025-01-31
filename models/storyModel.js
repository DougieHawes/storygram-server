import mongoose from "mongoose";

const StorySchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: false,
  },
  images: {
    type: [String],
    required: true,
  },
  tags: {
    type: [String],
  },
  story: {
    type: String,
    required: true,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  likes: {
    type: Array,
    default: [],
  },
  private: {
    type: Boolean,
    default: false,
  },
});

const StoryModel = mongoose.model("Story", StorySchema);

export default StoryModel;
