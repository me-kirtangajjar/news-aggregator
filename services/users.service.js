const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const allData = require("../data.json").allData;

const userRegisterService = async (name, email, password) => {
  try {
    const isUserExist = allData.find((user) => user.email == email);

    if (isUserExist) {
      return { status: 400, message: "User already exist, try to login" };
    }

    const hashedPassword = await bcrypt.hash(password, 8);

    const userData = {
      name,
      email,
      password: hashedPassword,
    };

    allData.push(userData);

    return {
      status: 201,
      message: "User registered successfully",
      data: userData,
    };
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Something went wrong !!!" });
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
      return { status: 400, message: "Enter valid password" };
    }

    const authToken = jwt.sign({ user: userData.email }, "thisiskirtangajjar", {
      expiresIn: "30D",
    });

    return {
      status: 200,
      message: "User logged in successfully",
      data: authToken,
    };
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Something went wrong !!!" });
  }
};

module.exports = { userRegisterService, userLoginService };
