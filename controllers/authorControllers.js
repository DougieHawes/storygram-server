export const signupAuthor = (req, res) => {
  res.status(200).json({ msg: "signupAuthor" });
};

export const signinAuthor = (req, res) => {
  res.status(200).json({ msg: "signinAuthor" });
};

export const readAuthor = (req, res) => {
  const { authorId } = req.params;
  res.status(200).json({ msg: `readAuthor - ${authorId}` });
};
