const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const logger = require("morgan");
const fs = require("fs");
const dotenv = require("dotenv");
const routes = require("./routes/export.route");
const connectDB = require("./config/Database");

// Load env variables
dotenv.config();
const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI;

connectDB(MONGO_URI);

// Create express app
const app = express();

// Middleware
// The CORS middleware allows us to specify which domains we want to allow requests from.
app.use(cors({
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE"]
}));

// To parse the body of the request
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Morgan to display the logs in the console
app.use(logger("dev"));
app.use(logger("combined", { stream: fs.createWriteStream("./access.log", { flags: "a" }) }));

// API routes
app.use('/api/user', routes.user);
app.use('/api/project', routes.project);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});















// // Mangoose & Routers

// const connectDB = require("./config/Database");
// const routes = require("./routes/export.route");
// const cors = require("cors");
// const logger = require("morgan");
// const fs = require("fs");

// // Connect to the database
// connectDB();

// // Middleware
// // To parse the body of the request
// app.use(express.json());

// // To display the logs in the console
// app.use(logger("dev"));

// // CORS
// // Allow the front to communicate with the Back
// app.use(cors({
//   origin: "http://localhost:3000"
// }));

// // Import API routes
// app.use('/api/auth', routes.auth);
// app.use('/api/user', routes.user);
// // app.use('/api/conversation', routes.conversation);
// app.use('/api/message', routes.message);