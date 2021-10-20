const express = require('express');
const router = express.Router();

const courses = require('../Model/Database/courses.json')
const logged_user = require('../Model/Database/logged_user.json')

router.get('/get-courses', (req, res) => {
    console.log('enviando cursos')
    res.json(courses);
})

router.get('/get-logged-user', (req,res) => {
    console.log('enviando logado');
    res.json(logged_user);
})

module.exports = router;