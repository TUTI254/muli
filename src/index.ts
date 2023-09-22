import express from "express";
import http from "http";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
import cors from "cors";

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
