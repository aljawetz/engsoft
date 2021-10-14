const bodyParser = require("body-parser");
const express = require("express");

const router = express.Router();
const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded());

// routes dos estudantes
const student = require('./Controller/Users/Student')

app.use('/student', student);

// app.post("/student/create-group", (req, res) => {
//     console.log("Connected to React");
//     res.redirect("/");
// });

app.get("/api", (req, res) => {
    res.json({ message: "Hello from server!" });
  });
  

const PORT = process.env.PORT || 8080;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
