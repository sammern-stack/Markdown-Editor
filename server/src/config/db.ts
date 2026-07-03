import { connect } from "mongoose";
import { MONGODB_URI } from "./env.js";

export const connectDB = async () => {
  try {
    const conn = await connect(MONGODB_URI);
    console.log(`Connected to DB successfully at: ${conn.connection.host}`);
  } catch (err) {
    console.log(`Unexpected error while connecting to db: ${err}`);
    process.exit(1);
  }
};
