import mongoose from "mongoose";
export const connectToDB = async () => {
  if (mongoose.connection.readyState === 1) {
    return;
  }
  try {
    const uri = process.env.MONGODB_URI;
    if (!uri) {
      throw new Error("MongoDB_URI is not defined in environment variable");
    }
    await mongoose.connect(uri, { dbName: "share_prompt" });
  } catch (error) {
    console.log("Error connecting to MongoDB", error);
  }
};
