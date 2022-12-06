const createPost = async (req, res) => {
  res.status(200).json({ msg: "create post" });
};

const readPosts = async (req, res) => {
  res.status(200).json({ msg: "read posts" });
};

const readPost = async (req, res) => {
  res.status(200).json({ msg: "read post" });
};

const updatePost = async (req, res) => {
  res.status(200).json({ msg: "update post" });
};

const deletePost = async (req, res) => {
  res.status(200).json({ msg: "delete post" });
};

module.exports = {
  createPost,
  readPosts,
  readPost,
  updatePost,
  deletePost,
};
