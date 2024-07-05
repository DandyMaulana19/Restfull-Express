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
  { id: 1, name: "John", age: 30 },
  { id: 2, name: "Jane", age: 28 },
  { id: 3, name: "Bob", age: 35 },
  { id: 4, name: "Alice", age: 27 },
  { id: 5, name: "David", age: 32 },
  { id: 6, name: "Eve", age: 31 },
  { id: 7, name: "Frank", age: 33 },
  { id: 8, name: "Grace", age: 29 },
  { id: 9, name: "Henry", age: 34 },
  { id: 10, name: "Isabella", age: 36 },
  { id: 11, name: "Jack", age: 37 },
  { id: 12, name: "Karen", age: 38 },
  { id: 13, name: "Lisa", age: 39 },
];

app.get("/", (req, res) => {
  res.send({ datas });
});

app.post("/", (req, res) => {
  const { name, age } = req.body;
  datas.push({ name, age });
  res.redirect("/");
});

app.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const data = datas.find((data) => data.id === id);
  if (data) {
    res.send(data);
  } else {
    res.status(404).send("Data not found");
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
