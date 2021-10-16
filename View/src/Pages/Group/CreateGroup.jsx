import React, {useState, useEffect} from "react";
import { Container } from "./style";

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import {CourseSelect} from '../../Components/CourseSelect/index'

function CreateGroup() {
  const [coursesData, setCoursesData] = useState({"courses": []});
  const [classID, setClassID] = useState([]);
  const [logged, setLogged] = useState();
  const [course, setCourse] = useState('');
  const [selectedWork, setSelectedWork] = useState();
  const [works, setWorks] = useState([])
  
  useEffect(() => {
    
    fetch('/user/get-courses')
    .then(response => response.json())
    .then(data => setCoursesData(data))
    
    fetch('/user/get-logged-user')
    .then(response => response.json())
    .then(data => setLogged(data))
    
  }, []);
  
  useEffect(() => {
    const possibleWorks = []
    coursesData.courses.map(courseData => {
      if (courseData.name == course) {
        courseData.classes.map(cls => {
          const classesIds = logged.courses.map(c => c.classID)
          if (classesIds.includes(cls.classID)) {
            possibleWorks.push(cls.works)
          } 
        })
      }
    })
    setWorks(possibleWorks)
    
  }, [course])
  
  console.log("works", works)
  console.log("course",course)
  console.log("selectedWork", selectedWork)
  
  if(works.length > 0) {
    console.log(works)
    return (
      <>
      <Container>
      <form action="/student/create-group" method="post">
      
      
      <CourseSelect loggedData={logged} course={course} set={setCourse}></CourseSelect>
      
      <TextField id="outlined-basic" fullWidth name="work_name" label="Work" variant="outlined" />
      
      <TextField id="outlined-basic" fullWidth name="group_name" label="group_name" variant="outlined" />
      
      <Button type="submit" variant="contained">
      Criar grupo
      </Button>
      
      </form>
      
      </Container>
      </>
      )
    }
    else {
      return (
        <Container>
        <CourseSelect loggedData={logged} course={course} set={setCourse}></CourseSelect>
        </Container>
        )
      }
      
    }
    
    export default CreateGroup;
    