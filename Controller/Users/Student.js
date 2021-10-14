// import { User } from "../User";
// import { users } from "../../Model/users/students.json";
// import { groups } from "../../Model/groups.json";
// const writeFileP = require("write-file-p");

const express = require('express');
const router = express.Router();

const User = require('../User');
const students = require('../../Model/users/students.json')
const groups = require('../../Model/groups.json');

const fs = require('fs');

class Student extends User {
  // list all groups that exist
  list_groups(res) {
    
    const all_groups = groups.groups;

    return JSON.stringify(all_groups);
  }

  create_group(req, res) {
    const group_name = req.body.group_name;

    const existingGroupsNames = groups.groups.map( (group) => group.name);
    console.log(existingGroupsNames);

    if (existingGroupsNames.includes(group_name)) return;

    const newGroup = {name: group_name, students: [], moderator: "Arthur"}
    groups.groups.push(newGroup);

    fs.writeFile("./Model/groups.json", JSON.stringify(groups), function(err) {
      if (err) throw err;
      console.log('complete');
      });
  }

}

router.get('/get-groups', (req,res) => {
  console.log("alo")
  res.json(groups);
})


router.post('/create-group', (req, res) => {
  new Student().create_group(req, res);
});


module.exports = router;

// // subclasse Professor, que herda de User
// export class Student extends User {
//   list_groups() {
//     return users.map((user) => user.group);
//   }
  
//   // para a criação de grupos, algo exercido pelo estudante
//   create_group(group_name) {
//     const existingGroupsNames = groups.map((group) => group.name);
//     if (existingGroupsNames.includes(group_name)) return "Grupo já existente";

//     const newGroup = { group: group_name, students: [], moderator: "Arthur" };
//     groups.push(newGroup);

//     var json = JSON.stringify(groups);
//     writeFileP.sync(`${__dirname}/output.json`, json);

//     return `Grupo ${group_name} criado`;
//   }
// }
