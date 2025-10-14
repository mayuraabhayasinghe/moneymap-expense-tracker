import { API_PATHS } from "./apiPaths";
import axiosInstance from "./axiosInstance";

/**
 * Modified uploadImage function for signup process
 * @param {File} imageFile - The image file to upload
 * @returns {Promise<Object>} - Contains imageUrl from the response
 */
const uploadImageForSignup = async (imageFile) => {
  const formData = new FormData();
  //Append image file to form data
  formData.append("image", imageFile);

  try {
    const response = await axiosInstance.post(
      API_PATHS.IMAGE.UPLOAD_IMAGE_SIGNUP, // Use the signup-specific endpoint
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data", //Setting header for file upload
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error uploading the image during signup: ", error);
    throw error; // Rethrow error for handling
  }
};

export default uploadImageForSignup;
