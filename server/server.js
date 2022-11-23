const express = require('express');
const colors = require("colors");
const dotenv = require('dotenv');
const cors = require("cors");
const connectToDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const {notFound, errorHandler} = require("./middlewares/errorMiddleware");

// configure required packages
dotenv.config();
connectToDB()

// transfer contents of express to app
const app = express()
app.use(express.json()); //to accept json data

// response on / route
app.get("/", (req, res) => {
    res.send("API is running successfully")
})

// routes
app.use(cors());
app.use("/api/users", userRoutes);

// middlewares
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`.yellow.bold);
});