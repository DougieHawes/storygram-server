import mongoose from "mongoose";

const postSchema = mongoose.Schema(
  {
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    postTitle: { type: String, required: true },
    text: { type: String, required: true },
  },
  { timeStamps: true }
);

export default mongoose.model("Post", postSchema);
