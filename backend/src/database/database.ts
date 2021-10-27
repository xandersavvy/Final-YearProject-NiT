import mongoose from "mongoose";
import { UserModel } from "./users/users.model";
let database: mongoose.Connection;

export const connect = () => {
  // add your own uri below
  const uri =
    "mongodb+srv://pratik:mWzdfS0eVByE4BfN@cluster0.wnyo7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
  if (database) {
    return;
  }
  mongoose
    .connect(uri, {
      //@ts-ignore
      useNewUrlParser: true,

      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Database connected");
    })
    .catch((err) => {
      console.error("Connection error", err);
      process.exit();
    });
  database = mongoose.connection;
  database.once("open", async () => {
    console.log("Connected to database");
  });
  database.on("error", () => {
    console.log("Error connecting to database");
  });
};
export const disconnect = () => {
  if (!database) {
    return;
  }
  mongoose.disconnect();
};
