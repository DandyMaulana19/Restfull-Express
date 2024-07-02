const express = require("express");
require("dotenv").config();

const app = express();
const port = process.env.PORT;

// app.use((req, res) => {
//   console.log("test");
// });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const datas = [
  { name: "John", age: 30 },
  { name: "Jane", age: 28 },
  { name: "Bob", age: 35 },
  { name: "Alice", age: 27 },
  { name: "David", age: 32 },
  { name: "Eve", age: 31 },
  { name: "Frank", age: 33 },
  { name: "Grace", age: 29 },
  { name: "Henry", age: 34 },
  { name: "Isabella", age: 36 },
  { name: "Jack", age: 37 },
  { name: "Karen", age: 38 },
  { name: "Lisa", age: 39 },
];

app.get("/", (req, res) => {
  res.send({ datas });
});

app.post("/", (req, res) => {
  const { name, age } = req.body;
  datas.push({ name, age });
  res.redirect("/");
});

app.get("/${hallo}", (req, res) => {
  res.send("hai!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
