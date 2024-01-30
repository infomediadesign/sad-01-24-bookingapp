import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js"
import hotelsRoute from "./routes/hotels.js"
import usersRoute from "./routes/users.js"
import roomsRoute from "./routes/rooms.js"


const app = express();
dotenv.config();


// Initial connection
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB.");
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("MongoDB disconnected!");
});


//Middleware 
app.use("/backend/auth", authRoute)
app.use("/backend/users", usersRoute)
app.use("/backend/hotels", hotelsRoute)
app.use("/backend/rooms", roomsRoute)











app.listen(8080, () => {
  connect();
  console.log("Connected to backend!");
});
