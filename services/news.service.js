const axios = require("axios");
const allData = require("../data.json").allData;

const fetchUserNewsPreferencesService = async (email) => {
  try {
    const loggedInUser = allData.find((user) => user.email == email);
    console.log(loggedInUser);

    return {
      status: 200,
      message: "Fetched user preferences",
      data: loggedInUser.preferences,
    };
  } catch (error) {
    console.log(error);
    return { status: 500, message: "Something went wrong !!!" };
  }
};

const fetchUserNewsService = async (email) => {
  try {
    const loggedInUser = allData.find((user) => user.email == email);

    const fetchNewsFromNewsApi = await axios.get(
      "https://newsapi.org/v2/top-headlines?language=en&country=in&category=technology",
      {
        headers: {
          "x-api-key": "0d8aca9861644d819e9492c47ca83875",
        },
      }
    );

    return { status: 200, message: "news fetched", data: fetchNewsFromNewsApi };
  } catch (error) {
    console.log(error);
    return { status: 500, message: "Something went wrong !!!" };
  }
};

module.exports = { fetchUserNewsPreferencesService, fetchUserNewsService };
