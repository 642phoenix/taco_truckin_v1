require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const corsOptions = require("./config/corsOptions");
const mongoose = require("mongoose");
const connectDB = require("./config/db");
const PORT = process.env.PORT || 5000;
const { Schema } = mongoose;

console.log(process.env.NODE_ENV);
connectDB();
let db = mongoose.connection;

var user = new Schema({
  fname: String,
  lname: String,
  email: String,
  number: String,
  comment: [String],
});

var inventory = mongoose.model("inventory", user);


// var refer_vote = new Schema({
// reference:
// });

app.use(cors(corsOptions));

app.use(express.json({ limit: "50mb", extended: true, parameterLimit: 50000 }));

// app.use(express.json());

app.use("/", express.static(path.join(__dirname, "public")));

app.use("/", require("./routes/root"));

app.post("/user", (req, res) => {
  let user_info = req.body;
  const { firstName, lastName, email, number, comment } = req.body;

  res.send("<p>HEYY</p>");
  console.log(inventory.countDocuments({}, (error, count) => console.log(count)));
  // console.log(db,"here")
});
// {
//   firstName: 'Jazmin',
//   lastName: 'Love',
//   email: 'jlove@email.com',
//   number: '',
//   comment: 'heyy<3',
//   referrer: 'walk-up'
// }
app
  .route("/user")
  // when a user adds a song to their playlist
  .post((req, res) => {
    console.log(req.body);
    res.send("<p>HEYY</p>");
    console.log(mongoose.connection);
    // let id = req.body.userID;
    // let title = req.body.title;
    // let artist = req.body.artist;
    // let file = req.body.file;
    // console.log(id, title)

    // accounts.findById(id)
    //   .then(data=>{
    //     // console.log(data)
    //     data.playlist.push({
    //       title:title,
    //       artist:artist,
    //       file:file
    //     });
    //     data.save();
    //     res.send("Song Upload Successful");
    //   }).catch(err=>{
    //     throw err
    //   })
  });

app.all("*", (req, res) => {
  res.status(404);
  if (req.accepts("html")) {
    res.sendFile(path.join(__dirname, "views", "404.html"));
  } else if (req.accepts("json")) {
    res.json({ message: "404 Not Found" });
  } else {
    res.type("txt").send("404 Not Found");
  }
});

mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB");

  // this populates the libros collection if empty on start up
  inventory.countDocuments({}, (err, count) => {
    if (err) throw err;
    if (count === 0) {
      inventory.create([
        {
          title: "The Wisdom of Insecurity",
          author: "Alan W. Watts",
          genre: "philosophy",
          comments: [
            {
              commentator: "Library",
              comment: "This book is The Shit",
            },
          ],
          log: [
            {
              type: "IN",
              date: new Date(),
              user: "Librarian",
            },
          ],
          due: "",
        },
        {
          title: "A New Earth",
          author: "Eckhart Tolle",
          genre: "philosophy",
          comments: [
            {
              commentator: "Library",
              comment: "Enlightening",
            },
          ],
          log: [
            {
              type: "IN",
              date: new Date(),
              user: "Library",
            },
          ],
          due: "",
        },
        {
          title: "The Power of Now",
          author: "Eckhart Tolle",
          genre: "philosophy",
          comments: [],
          log: [
            {
              type: "IN",
              date: new Date(),
              user: "Library",
            },
          ],
          due: "",
        },
        {
          title: "The Kybalion",
          author: "The Three Initiates",
          genre: "philosophy",
          comments: [
            {
              commentator: "Library",
              comment: "WTF",
            },
          ],
          log: [
            {
              type: "IN",
              date: new Date(),
              user: "Library",
            },
          ],
          due: "",
        },
      ]);
    }
  });

  app.listen(PORT, () => console.log(`Running on port ${PORT}`));
});

mongoose.connection.on("error", (err) => {
  console.log(err);
  // logEvents(`${err.no}: ${err.code}\t ${err.syscall}\t${err.hostname}`, 'mongoErrLog.log')
});
