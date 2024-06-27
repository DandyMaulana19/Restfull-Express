const express = require("express");
require("dotenv").config();

const app = express();
const port = process.env.PORT;

// app.use((req, res) => {
//   console.log("test");
// });

app.get("/", (req, res) => {
  res.send("hello world!");
});

app.get("/${hallo}", (req, res) => {
  res.send("hai!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
