const createUser = async (req, res) => {
  res.status(200).json({ msg: "create user" });
};

const signinUser = async (req, res) => {
  res.status(200).json({ msg: "signin user" });
};

const signoutUser = async (req, res) => {
  res.status(200).json({ msg: "signout user" });
};

const readUser = async (req, res) => {
  res.status(200).json({ msg: `read user ${req.params.id}` });
};

const updateUser = async (req, res) => {
  res.status(200).json({ msg: `update user ${req.params.id}` });
};

const deleteUser = async (req, res) => {
  res.status(200).json({ msg: `delete user ${req.params.id}` });
};

module.exports = {
  createUser,
  signinUser,
  signoutUser,
  readUser,
  updateUser,
  deleteUser,
};
