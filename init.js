const mongoose = require('mongoose');
const Chat = require("./models/chat.js");

main().
  then(() => { console.log("connection succesful") })
  .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/Whatsapp');
}

let allchats = [
  {
    from: "kavi",
    to: "Saksham",
    msg: "Hello bhaiya kese ho",
    created_at: new Date(),
  },
  {
    from: "Sarthak",
    to: "Kavi",
    msg: "Hello",
    created_at: new Date(),
  },
  {
    from: "A",
    to: "B",
    msg: "Ever",
    created_at: new Date(),
  },
  {
    from: "D",
    to: "E",
    msg: "Never",
    created_at: new Date(),
  },
  {
    from: "F",
    to: "G",
    msg: "Ok",
    created_at: new Date(),
  },

]
Chat.insertMany(allchats);
