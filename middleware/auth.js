const jwt = require("jsonwebtoken");

const validateUser = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];

    if (!token) {
      return res
        .status(400)
        .send({ message: "Token required! Please login to generate token" });
    }

    jwt.verify(token, "thisiskirtangajjar", (error, decodedString) => {
      if (error) {
        return res.status(401).send({ message: "Login" });
      }

      req.userEmail = decodedString.userEmail;
      next();
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Something went wrong !!!" });
  }
};
module.exports = { validateUser };
