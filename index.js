// run `node index.js` in the terminal
import express from "express";
import qr from "qr-image";
import bodyparser from "body-parser";
import fs from "fs";

const app = express();

app.use(bodyparser.urlencoded({ extended: false }))

app.get("/", (req, res) =>{
  res.render("index.ejs");
});

app.post("/generate", (req, res) =>{
  var link = req.body.link;
  var qr_svg = qr.image(link, { type: 'png' });
  qr_svg.pipe(fs.createWriteStream("qr_image.png"));
  //const qr_img = link+".png";
  console.log("created "+link+ " qr image");
  res.render("index.ejs");
});

app.listen(3000, ()=>{
  console.log("running on port 3000")
});