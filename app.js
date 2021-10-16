const bodyParser = require("body-parser");
const express = require("express");

const students = require('./Model/users/students.json')

const fs = require('fs');

const router = express.Router();
const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded());

// routes dos estudantes
const student = require('./Controller/Users/Student')
const user_router = require('./Controller/User')
const User = user_router.router;

app.use('/user', User);
app.use('/student', student);

app.get('/', () => {
  console.log('alo')
})

app.post("/", (req, res) => {
  user = {
    "name": req.body.username
  }

  students.users.map( (student) => {
    if(student.name == user.name) {
      user = {...student};
    }
  } )

  
  fs.writeFile("./Model/logged_user.json", JSON.stringify(user), function(err) {
    if (err) throw err;
    console.log('complete');
    });
  
    res.redirect('/')

  });
  
const PORT = process.env.PORT || 8080;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
