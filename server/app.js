const express = require("express");
const cors = require("cors");
const connectDB = require("./db.js");
const userRoute = require("./route/user.route.js");
const courseRoute = require("./route/course.route.js");
const commentRoute = require("./route/comment.route.js");
const purchaseRoute = require("./route/purchase.route.js");

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
app.use("/api/comment", commentRoute);
app.use("/api/purchase", purchaseRoute);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
