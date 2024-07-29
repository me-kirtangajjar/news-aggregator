const {
  fetchUserNewsPreferencesService,
  updateUserNewsPreferencesService,
  fetchUserNewsService,
} = require("../services/news.service");

const getUserPreferences = async (req, res) => {
  try {
    const { status, message, data } = await fetchUserNewsPreferencesService(
      req.userEmail
    );
    return res.status(status).send({ preferences:data });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ message: "Something went wrong !!!" });
  }
};

const putUserPreferences = async (req, res) => {
  try {
    const { status, message, data } = await updateUserNewsPreferencesService(
      req.userEmail,
      req.body.preferences
    );
    return res.status(status).send({ message, news:data });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ message: "Something went wrong !!!" });
  }
};

const getNews = async (req, res) => {
  try {
    const { status, message, data } = await fetchUserNewsService(req.userEmail);
    return res.status(status).send({ message, data });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Something went wrong !!!" });
  }
};

module.exports = { getUserPreferences, putUserPreferences, getNews };
