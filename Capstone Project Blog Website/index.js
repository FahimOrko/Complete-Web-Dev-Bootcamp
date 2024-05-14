import express from "express";
import bodyParser from "body-parser";
import {render} from "ejs";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));


app.get("/home.ejs", (req, res) => {
    res.render("partials/home.ejs");     
});

app.get("/blogPage.ejs", (req, res) => {
    res.render("partials/blogPage.ejs");     
});
  
app.get("/editBlog.ejs", (req, res) => {
    res.render("partials/editBlog.ejs");
});


app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});