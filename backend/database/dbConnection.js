import mongoose from "mongoose";

export const dbConnection = () => {
  mongoose.connect(
    "mongodb+srv://maheshbhatt181995:<password>@temp.zsulayp.mongodb.net/?retryWrites=true&w=majority"
  ).then(console.log("Connected to db"))
}