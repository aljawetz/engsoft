const User = require('../User');
const courses = require('../../Model/Database/courses.json')
const students = require('../../Model/Database/users/students.json');
const groups = require('../../Model/Database/groups.json');
const logged_user = require('../../Model/Database/logged_user.json');

const fs = require('fs');

class Student extends User {
  // list all groups that exist
  list_groups(res) {
    
    const all_groups = groups.groups;

    return JSON.stringify(all_groups);
  }

  create_group(req, res) {
    const group_name = req.body.group_name;

    //checa se nome ja existe
    const existingGroupsNames = groups.groups.map( (group) => group.name);
    if (existingGroupsNames.includes(group_name)) return;

    //acha a classe a ser criado novo grupo
    const cur_cls = logged_user.courses.filter( (course) => (course.name === req.body.course_name) )
    //name e classID

    for( let i=0; i<courses.courses.length; i++ ) {
      if( courses.courses[i].name == req.body.course_name ) {
        console.log("AAA")
        for(let j=0; j<courses.courses[i].classes.length; j++) {
          console.log("IDS:" , courses.courses[i].classes[j].classID, cur_cls[0].classID)
          if(courses.courses[i].classes[j].classID == cur_cls[0].classID) {
            console.log("BBB")
            for( let k=0; k<courses.courses[i].classes[j].works.length; k++ ) {
              if(courses.courses[i].classes[j].works[k].name == req.body.work_name) {
                console.log("CCC")
                courses.courses[i].classes[j].works[k].groups.push( 
                  {
                    name: group_name, 
                    students: [], 
                    moderators: [logged_user.name]
                  }
                )
                break;
              }
            }
          }
        }
      }
    }

    for( let i=0; i<students.users.length; i++ ) {
      if( students.users[i].name == logged_user.name ) {
        students.users[i].groups.push(
          {
            name: req.body.course_name,
            classID: cur_cls[0].classID,
            group: req.body.group_name,
            role: "Moderator"
          }
        )
      }
    }

    const newGroup = {name: group_name, students: [], moderators: [logged_user.name], course: cur_cls[0].name, classID: cur_cls[0].classID, work: req.body.work_name}
    groups.groups.push(newGroup);

    console.log(newGroup)

    fs.writeFile("./Model/Database/groups.json", JSON.stringify(groups), function(err) {
      if (err) throw err;
      console.log('complete 1');
      });

    fs.writeFile("./Model/Database/courses.json", JSON.stringify(courses), function(err) {
      if (err) throw err;
      console.log('complete 2');
      });

    fs.writeFile("./Model/Database/users/students.json", JSON.stringify(students), function(err) {
      if (err) throw err;
      console.log('complete 3');
      });

      res.send({"sucesso": "sim"})
  }

}

module.exports = Student;