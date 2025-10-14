const express = require("express");
const { protect } = require("../middleware/authMiddleware");
const {
  registerUser,
  loginUser,
  getUserInfo,
} = require("../controllers/authController");
const { updateProfileImage } = require("../controllers/profileController");
const upload = require("../middleware/uploadMiddleware");

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/getUser", protect, getUserInfo);

// Upload image route with two versions:
// 1. Public route for signup (no auth)
// 2. Protected route for profile updates (with auth)
router.post(
  "/upload-image",
  (req, res, next) => {
    // If the request includes an 'isSignup' query param, bypass auth
    if (req.query.isSignup === "true") {
      return next();
    }
    // Otherwise apply auth protection
    return protect(req, res, next);
  },
  upload.single("image"),
  updateProfileImage
);

module.exports = router;
