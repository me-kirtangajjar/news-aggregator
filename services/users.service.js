const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const allData = require("../data.json").allData;

const userRegisterService = async (name, email, password, preferences) => {
  try {
    if (!email) {
      return { status: 400 };
    }
    const isUserExist = allData.find((user) => user.email == email);

    if (isUserExist) {
      return { status: 400, message: "User already exist, try to login" };
    }

    const hashedPassword = await bcrypt.hash(password, 8);

    const userData = {
      name,
      email,
      password: hashedPassword,
      preferences,
    };

    allData.push(userData);

    return {
      status: 200,
      data: userData,
    };
  } catch (error) {
    console.log(error);
    return { status: 500, message: "Something went wrong !!!" };
  }
};

const userLoginService = async (email, password) => {
  try {
    const userData = allData.find((data) => data.email == email);
    if (!userData) {
      return { status: 404, message: "User not found, Please register first" };
    }

    const comparePassword = await bcrypt.compare(password, userData.password);
    if (!comparePassword) {
      return { status: 401, message: "Enter valid password" };
    }

    const authToken = jwt.sign(
      { userEmail: userData.email },
      process.env.JWTTOKENKEY,
      {
        expiresIn: "30D",
      }
    );

    return {
      status: 200,
      message: "User logged in successfully",
      data: authToken,
    };
  } catch (error) {
    console.log(error);
    return { status: 500, message: "Something went wrong !!!" };
  }
};

module.exports = { userRegisterService, userLoginService };
