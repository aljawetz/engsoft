import React from 'react';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export function CourseSelect( { loggedData, course, set } ) {
    
    const handleCourseChange = (event) => {
        set(event.target.value);
        console.log(course)
    };

    return (
        <FormControl fullWidth>
        <InputLabel name="course_name" id="demo-simple-select-label">Course</InputLabel>
        <Select name="course_name"
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={course}
        label="course_name"
        onChange={handleCourseChange}
        >
        {
            ((loggedData && loggedData.courses) || []).map( (course) => 
            <MenuItem value={course.name}>{course && course.name}</MenuItem> 
            )
        }  
        </Select>
        </FormControl>
        )
        
    }