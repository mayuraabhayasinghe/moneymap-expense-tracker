const multer = require("multer");
const { storage } = require("../config/cloudinary");

//File filter
const fileFilter = (req, file, cb) => {
  const allowedTypes = ["image/jpeg", "image/png", "image/jpg"];
  if (allowedTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("Only .jpeg, .jpg and .png formats are allowed"), false);
  }
};

// Create multer upload middleware using Cloudinary storage
const upload = multer({
  storage,
  fileFilter,
  limits: {
    fileSize: 1024 * 1024 * 5, // Limit file size to 5MB
  },
});

module.exports = upload;
