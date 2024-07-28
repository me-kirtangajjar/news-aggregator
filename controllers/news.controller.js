const getUserPreferences = async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Something went wrong !!!" });
  }
};

const putUserPreferences = async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Something went wrong !!!" });
  }
};

const getNews = async (req, res) => {
  try {
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Something went wrong !!!" });
  }
};

module.exports = { getUserPreferences, putUserPreferences, getNews };
