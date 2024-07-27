const router = require("express").Router();
const { userRegister, userLogin } = require("../controllers/users.controller");

router.post("/register", userRegister);
router.post("/login", userLogin);

module.exports = router;
