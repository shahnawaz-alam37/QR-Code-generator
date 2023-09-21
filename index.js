// run `node index.js` in the terminal
import express from "express";
import qr from "qr-image";
import bodyparser from "body-parser";

const app = express();

app.use(bodyparser.urlencoded({ extended: false }))

app.get("/", (req, res) =>{
  res.render("index.ejs");
});

app.post("/generate", (req, res) =>{
  var link = req.body.link;
  console.log(link);
});

app.listen(3000, ()=>{
  console.log("running on port 3000")
});