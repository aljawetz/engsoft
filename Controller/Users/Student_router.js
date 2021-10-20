const express = require('express');
const router = express.Router();

const students = require('../../Model/Database/users/students.json');
const groups = require('../../Model/Database/groups.json');

const Student = require('../../Model/Users/Student')

router.get('/get-students', (req,res) => {
  console.log('meio funcionando');
  res.json(students)
})

router.get('/get-groups', (req,res) => {
  console.log("alo")
  res.json(groups);
})

router.post('/create-group', (req, res) => {
  console.log(req.body)
  new Student().create_group(req, res);
});

module.exports = router;
