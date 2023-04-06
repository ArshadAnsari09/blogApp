const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/database");

//env config
dotenv.config();

//router import
const blogRoutes = require("./routes/blogRoutes");

//mongoDB connection
connectDB();

const app = express();

//middleware
app.use(cors());
app.use(express.json());

//router
app.use("/api/v1/blog", blogRoutes);
// app.get('/',(req,res) => {
//     res.status(200).send("started");
// })

//port
PORT = process.env.PORT || 5000;

//listen
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
