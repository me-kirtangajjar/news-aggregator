const router = require("express").Router();
const {
  getUserPreferences,
  putUserPreferences,
  getNews,
} = require("../controllers/news.controller");

router.get("/preferences", getUserPreferences);
router.put("/preferences", putUserPreferences);
router.get("/news", getNews);

module.exports = router;
