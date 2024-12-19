const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

const users = [
  { user: "zima", email: "zima11@gmail.com", password: 12334 },
  { user: "emma", email: "emma@gmail.com", password: 123994 },
  { user: "zim0", email: "zimo@gmail.com", password: 1234 },
];

app.get("/", function (req, res) {
  res.json("pls  be hard");
});

app.post("/login", function (req, res) {
  const { email, password } = req.body;
  console.log(email);
  console.log(password);

  for (let i = 0; i < users.length; i++) {
    if (email == users[i].email && password == users[i].password) {
      res.json("found user");
    }
  }

  res.json("user not found");
});

app.listen(port, function () {
  console.log(`Example app listening on port ${port}`);
});
