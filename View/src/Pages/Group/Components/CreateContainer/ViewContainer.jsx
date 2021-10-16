import React, {useState, useEffect} from "react";
import { Container,ItemContainer } from "./style";

import { CourseSelect } from "../../../../Components/CourseSelect";

function ViewContainer() {
  const [coursesData, setCoursesData] = useState([]);
  const [course, setCourse] = useState('');
  const [groups, setGroups] = useState([[[{"name": "", "students": [], "moderators": []}]]]);

   useEffect( () => { 
  
    fetch("/user/get-courses")
    .then(response => response.json())
    .then(data => setCoursesData(data))

  }, []);

  useEffect( () => {
    let possible_groups = []

    if (coursesData.courses) {
      console.log("course", course)
      possible_groups = coursesData.courses.filter( (crs) => (crs.name == course) )[0].classes.map( (cls) => (cls.works.map(wks => wks.groups)) );
      console.log("courseData",coursesData); 
      console.log("possible_groups", possible_groups)
    }

    setGroups(possible_groups)
  }, [course] )

  const getCourses = () => {
    console.log("getcourses", coursesData.courses.map( cls => cls.name ))
  }


  return (
    <Container>
    {
      coursesData.courses ? <CourseSelect loggedData={coursesData} course={course} set={setCourse}></CourseSelect> : <></>
    }

    {
    groups.map((grp) => {
      console.log("grp", grp)
      grp.map( (grp_2) => {
        console.log("grp_2", grp_2)
        grp_2.map( (group) => {
          console.log("group", group)
          return <ItemContainer>
        <div>{group.name}</div>
        { group.moderators.map( mod => <div>{mod}</div> )}
        { group.students.map( (student) => 
          <div>{student}</div>
         ) }  
      </ItemContainer>
        }
        )}
       
   )})
    }
    </Container>
  );
}

export default ViewContainer;
