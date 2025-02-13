import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});
const uploadOnCloudinary = async (localfile) => {
  try {
    const uploadResult = await cloudinary.uploader.upload(localfile, {
      resource_type: "auto",
    });
    console.log("uploadResult: " + uploadResult);
    console.log("the image is uploaded successfully", uploadResult.url);
    fs.unlinkSync(localfile);
    return uploadResult;
  } catch (error) {
    console.log(error);
    fs.unlinkSync(localfile);
  }
};

export default uploadOnCloudinary;
