import express from "express";
import http from "http";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
import cors from "cors";
import mongoose from "mongoose";
import router from "./router";

// Create Express app
const app = express();

app.use(
  cors({
    credentials: true,
  })
); //enable cors

//Compress all routes
app.use(compression());
//Parse Cookie header and populate req.cookies
// with an object keyed by the cookie names.
app.use(cookieParser());
//Parse incoming request bodies in a middleware before your handlers,
// available under the req.body property.
app.use(bodyParser.json());

// Create HTTP server
const server = http.createServer(app);

server.listen(8000, () => {
  console.log("Server is running on http://localhost:8000/ ");
});

const MONGO_URL =
  "mongodb+srv://tuti254:tuti254@cluster0.qlzoqyq.mongodb.net/?retryWrites=true&w=majority";

// Connect to MongoDB
mongoose.Promise = Promise;
mongoose.connect(MONGO_URL);
mongoose.connection.on("error", (error: Error) => console.log(error));

app.use("/", router());
