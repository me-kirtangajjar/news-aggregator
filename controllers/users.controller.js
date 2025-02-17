const {
  userRegisterService,
  userLoginService,
} = require("../services/users.service");

const userRegister = async (req, res) => {
  try {
    const { name, email, password, preferences } = req.body;
    const { status, message, data } = await userRegisterService(
      name,
      email,
      password,
      preferences
    );

    res.status(status).send( data );
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Something went wrong !!!" });
  }
};

const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    const { status, message, data } = await userLoginService(email, password);

    res.status(status).send({ message, token:data });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Something went wrong !!!" });
  }
};

module.exports = { userRegister, userLogin };
