import express from "express";
import bodyParser from "body-parser";
import { name } from "ejs";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

let string = {sentence: "Enter your name below!"};

app.get("/", (req, res) => {
  res.render("index.ejs", string);
});

app.post("/submit", (req, res) => {
  var name = req.body["fName"] + req.body["lName"];
  // var name = req.body[];
  console.log(name);
  string.sentence = `Your name has ${name.length} letters to it`;
  res.render("index.ejs", string);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
