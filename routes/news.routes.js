const router = require("express").Router();
const {
  getUserPreferences,
  putUserPreferences,
  getNews,
} = require("../controllers/news.controller");
const { validateUser } = require("../middleware/auth");

router.get("/preferences", validateUser, getUserPreferences);
router.put("/preferences", putUserPreferences);
router.get("/news", validateUser, getNews);

module.exports = router;
