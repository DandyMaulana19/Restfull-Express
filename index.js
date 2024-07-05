const express = require("express");
const { v4: uuidv4 } = require("uuid");
require("dotenv").config();

const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let datas = [
  { id: uuidv4(), name: "John", age: 30 },
  { id: uuidv4(), name: "Jane", age: 28 },
  { id: uuidv4(), name: "Bob", age: 35 },
  { id: uuidv4(), name: "Alice", age: 27 },
  { id: uuidv4(), name: "David", age: 32 },
  { id: uuidv4(), name: "Eve", age: 31 },
  { id: uuidv4(), name: "Frank", age: 33 },
  { id: uuidv4(), name: "Grace", age: 29 },
  { id: uuidv4(), name: "Henry", age: 34 },
  { id: uuidv4(), name: "Isabella", age: 36 },
  { id: uuidv4(), name: "Jack", age: 37 },
  { id: uuidv4(), name: "Karen", age: 38 },
  { id: uuidv4(), name: "Lisa", age: 39 },
];

app.get("/", (req, res) => {
  res.send({ datas });
});

app.post("/", (req, res) => {
  const { name, age } = req.body;
  datas.push({ id: uuidv4(), name, age });
  res.redirect("/");
});

app.get("/:id", (req, res) => {
  const { id } = req.params;
  const data = datas.find((data) => data.id === id);
  if (data) {
    res.send(data);
  } else {
    res.status(404).send("Data not found");
  }
});

app.patch("/:id", (req, res) => {
  const { id } = req.params;
  const { name, age } = req.body;
  const data = datas.find((data) => data.id === id);
  if (data) {
    data.name = name !== undefined ? name : data.name;
    data.age = age !== undefined ? parseInt(age) : data.age;
    res.send(datas);
  } else {
    res.status(404).send("Data not found");
  }
});

app.delete("/:id", (req, res) => {
  const { id } = req.params;
  const data = datas.findIndex((data) => data.id === id);
  if (data !== -1) {
    datas.splice(data, 1);
    res.send("Data Deleted");
    // res.send(datas);
  } else {
    res.status(404).send("Data not found");
  }
});

// Using Id
// app.post("/", (req, res) => {
//   const { name, age } = req.body;
//   datas.push({ id, name, age });
//   res.redirect("/");
// });

// Using Id
// app.get("/:id", (req, res) => {
//   const id = parseInt(req.params.id);
//   const data = datas.find((data) => data.id === id);
//   if (data) {
//     res.send(data);
//   } else {
//     res.status(404).send("Data not found");
//   }
// });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
