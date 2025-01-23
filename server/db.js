const mongoose = require("mongoose");
require("dotenv").config();
console.log("process.env.MONGODB_URI: ", process.env.MONGODB_URI);

const connectDB = async () => {
  const uri =
    "mongodb+srv://madonnaagrestoera48:xZnY34PhllOKrnX2@cluster0.opjbf.mongodb.net/zdemy?retryWrites=true&w=majority&appName=Cluster0";
  const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

  try {
    await mongoose.connect(process.env.MONGODB_URI || uri, options);
    console.log("MongoDB Connected...");
  } catch (error) {
    console.error("Database connection failed:", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
