const axios = require("axios");
const allData = require("../data.json").allData;

const fetchUserNewsPreferencesService = async (email) => {
  try {
    const loggedInUser = allData.find((user) => user.email == email);

    return {
      status: 200,
      data: loggedInUser.preferences,
    };
  } catch (error) {
    console.log(error);
    return { status: 500, message: "Something went wrong !!!" };
  }
};

const updateUserNewsPreferencesService = async (email, preferences) => {
  try {
    const loggedInUser = allData.find((user) => user.email == email);

    const index = allData.indexOf(loggedInUser);

    allData[index].preferences = preferences;

    return {
      status: 200,
      message: "Updated user preferences",
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
    let preferencesUrl = "";

    for (let i = 0; i < loggedInUser.preferences.length; i++) {
      preferencesUrl = preferencesUrl.concat(
        "&category=",
        loggedInUser.preferences[i]
      );
    }

    const response = await axios.get(
      `https://newsapi.org/v2/top-headlines?language=en&country=in${preferencesUrl}`,
      {
        headers: {
          "x-api-key": process.env.NEWSAPIKEY,
        },
      }
    );
    const fetchNewsFromNewsApi = response.data.articles;

    return {
      status: 200,
      data: fetchNewsFromNewsApi,
    };
  } catch (error) {
    console.log(error);
    return { status: 500, message: "Something went wrong !!!" };
  }
};

module.exports = {
  fetchUserNewsPreferencesService,
  updateUserNewsPreferencesService,
  fetchUserNewsService,
};
