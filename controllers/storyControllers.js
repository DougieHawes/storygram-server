export const createStory = (req, res) => {
  res.status(200).json({ msg: "createStory" });
};

export const readStories = (req, res) => {
  res.status(200).json({ msg: "readStories" });
};

export const readStory = (req, res) => {
  const { storyId } = req.params;
  res.status(200).json({ msg: `readStory - ${storyId}` });
};

export const updateStory = (req, res) => {
  const { storyId } = req.params;
  res.status(200).json({ msg: `updateStory - ${storyId}` });
};

export const deleteStory = (req, res) => {
  const { storyId } = req.params;
  res.status(200).json({ msg: `deleteStory - ${storyId}` });
};
