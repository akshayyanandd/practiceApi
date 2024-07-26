import mongoose from "mongoose";
import { MONGO_URL } from "../config/config.js";

const connectionDB = async () => {
  try {
    await mongoose.connect(MONGO_URL);
    console.log("Connection has been established !!");
  } catch (error) {
    console.log(error);
  }
};

export default connectionDB;
