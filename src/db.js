import mongoose from "mongoose";
import "dotenv/config";

export const conectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log(`>>>DATABASE SUCCESSFULLY CONNECTED`);
  } catch (error) {
    console.error(error);
  }
};
