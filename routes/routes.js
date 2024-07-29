const router = require("express").Router();
const { userRegister, userLogin } = require("../controllers/users.controller");
const {
  getUserPreferences,
  putUserPreferences,
  getNews,
} = require("../controllers/news.controller");
const { validateUser } = require("../middleware/auth");

// Users route
router.post("/users/signup", userRegister);
router.post("/users/login", userLogin);
router.get("/users/preferences", validateUser, getUserPreferences);
router.put("/users/preferences", validateUser, putUserPreferences);

// News routes
router.get("/news", validateUser, getNews);

module.exports = router;
