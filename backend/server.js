//importing all the necessary dependencies
import express from "express";
import connectDB from "./config/db.js";
import router from "./routes/router.js";

//dotenv configurations
import dotenv from "dotenv";
dotenv.config({});


const app = express();

//middleware
app.use(express.json());

//this is the application


//this is the port number
const port = 3000;

//apis
import alumniRoute from "./routes/alumni.route.js";
app.use("/api", router);
app.use("/api/alumni", alumniRoute);

//listener
app.listen(port, () => {
  connectDB();
  console.log("Server is running at the port 3000");
});
