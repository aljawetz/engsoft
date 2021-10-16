const express = require('express');
const router = express.Router();

const courses = require('../Model/courses.json')
const logged_user = require('../Model/logged_user.json')

// classe User
class User {}

router.get('/get-courses', (req, res) => {
    console.log('enviando cursos')
    res.json(courses);
})

router.get('/get-logged-user', (req,res) => {
    console.log('enviando logado');
    res.json(logged_user);
})

module.exports = {User, router};