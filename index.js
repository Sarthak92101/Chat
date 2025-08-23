const express=require("express");
const app=express();
const mongoose = require('mongoose');
const path=require("path"); 
const Chat=require("./models/chat.js");

app.set("views",path.join(__dirname, "views"));
app.set("view engine", "ejs");


main().
then(()=>{console.log("connection succesful")})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/Whatsapp');
}
let chat1=new Chat({
  from:"kavi",
  to:"Saksham",
  msg:"Hello bhaiya kese ho",
  created_at:new Date(),
});

chat1.save().then(res=>{console.log(res)})
app.get("/",(req,res)=>{
  res.send("root is working")
})
app.listen(8080, ()=>{
  console.log("Server is listeining on popt 8080 ")
})