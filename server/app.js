const express = require("express");
const cors = require("cors");
const connectDB = require("./db.js");
const userRoute = require("./route/user.route.js");
const courseRoute = require("./route/course.route.js");

const app = express();
const port = 3000;

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.get("/", (req, res) => {
  res.send("Server is running...");
});

app.use("/api/auth", userRoute);
app.use("/api/course", courseRoute);

// /api/auth/signup
// /api/auth/login

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
