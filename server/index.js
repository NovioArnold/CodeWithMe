import express  from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import postRoutes from "./routes/posts.js";

dotenv.config(); // To use the environment variables in the .env file
// Configure the server
const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true })); // To parse the body of the request and set the limit to 30mb
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true })); // To parse the body of the request and set the limit to 30mb
app.use(cors());    // To allow cross-origin requests

app.use("/posts", postRoutes); // To use the postRoutes in the app
// To connect to the database 
const CONNECTION_URL = process.env.MONGO_CONNECTION_STRING;    // To use the connection string from the environment variables
const PORT = process.env.PORT || 5000;  // To use the port from the environment variables or 5000 if it is not set

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
.catch((error) => console.log(error.message)); // To connect to the database

mongoose.set('strictQuery', true); // To prevent the use of deprecated methods