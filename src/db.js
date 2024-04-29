import mongoose from "mongoose";
import "dotenv/config";

export const conectDB = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://octadev:112020a@clusteroctavio.n8a1lsl.mongodb.net/merndb?retryWrites=true&w=majority&appName=ClusterOctavio`
    );
    console.log(`>>>DATABASE SUCCESSFULLY CONNECTED<<<`);
  } catch (error) {
    console.error(error);
  }
};
