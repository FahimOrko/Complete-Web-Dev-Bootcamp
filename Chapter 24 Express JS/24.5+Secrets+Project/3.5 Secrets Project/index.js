//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming

import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));

app.post("/check", (req, res) =>{
    var password = req.body.password
    // console.log(password);
    if(password==="jkjk"){
        res.sendFile(__dirname + "/public/secret.html");
    } else{
        // res.send("<p><b>Wrong</b></p>")
        // res.sendFile(__dirname + "/public/index.html");
        res.redirect("/");
    };
});

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});


app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});