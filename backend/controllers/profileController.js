const User = require("../models/User");

// Update profile image
exports.updateProfileImage = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No image uploaded" });
    }

    // Get image URL from Cloudinary
    const imageUrl = req.file.path;

    // Check if this is part of signup process (no user yet) or profile update
    // If no user is found in request (signup), just return the image URL
    if (!req.user) {
      return res.status(200).json({
        imageUrl,
        message: "Image uploaded successfully",
      });
    }

    // If user exists (profile update), then update the user record
    const updatedUser = await User.findByIdAndUpdate(
      req.user.id,
      { profileImageUrl: imageUrl },
      { new: true }
    ).select("-password");

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({
      user: updatedUser,
      imageUrl,
    });
  } catch (error) {
    console.error("Error updating profile image:", error);
    res.status(500).json({
      message: "Error updating profile image",
      error: error.message,
    });
  }
};
