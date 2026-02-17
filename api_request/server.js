const express = require("express");
const app = express();

app.use(express.json());

let users = [
  { id: 1, name: "Dax", att: 80, vid: 108432, total_sch: 14, bonus: 20 },
  { id: 2, name: "Het", att: 85, vid: 108432, total_sch: 14, bonus: 20 },
  { id: 3, name: "Raj", att: 90, vid: 108432, total_sch: 14, bonus: 20 },
  { id: 4, name: "Rachit", att: 88, vid: 108432, total_sch: 14, bonus: 20 },
  { id: 5, name: "Rakesh", att: 82, vid: 108432, total_sch: 14, bonus: 20 },
];

app.get("/users", (req, res) => {
  res.json(users);
});

app.post("/users", (req, res) => {
  const newUser = {
    id: users.length + 1,
    name: req.body.name,
    att: req.body.att,
    vid: req.body.vid,
    total_sch: req.body.total_sch,
    bonus: req.body.bonus
  };

  users.push(newUser);
  res.json(newUser);
});

app.patch("/users/:id", (req, res) => {
  const user = users.find(u => u.id == req.params.id);

  if (!user) return res.send("User not found");

  if (req.body.name) user.name = req.body.name;
  if (req.body.att) user.att = req.body.att;
  if (req.body.vid) user.vid = req.body.vid;
  if (req.body.total_sch) user.total_sch = req.body.total_sch;
  if (req.body.bonus) user.bonus = req.body.bonus;

  res.json(user);
});

app.put("/users/:id", (req, res) => {
  const user = users.find(u => u.id == req.params.id);

  if (!user) return res.send("User not found");

  user.name = req.body.name;
  user.att = req.body.att;
  user.vid = req.body.vid;
  user.total_sch = req.body.total_sch;
  user.bonus = req.body.bonus;

  res.json(user);
});

app.delete("/users/:id", (req, res) => {
  const user = users.find(u => u.id == req.params.id);

  if (!user) return res.send("User not found");

  users = users.filter(u => u.id != req.params.id);

  res.json(user);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
