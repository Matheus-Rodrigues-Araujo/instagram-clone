import mongoose from "mongoose";

const DBConnection = process.env.DATABASE_URI || "";

export const connectDatabase = () => {
  mongoose.connect(DBConnection);
  mongoose.Promise = global.Promise;
};
