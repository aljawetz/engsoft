import React, {useState, useEffect} from "react";
import { Container,ItemContainer } from "./style";

function ViewContainer() {
  const [groups, setGroups] = useState({"groups": [{"name": "", "students": []}]});

   useEffect( () => { 
  
    fetch("http://localhost:3000/student/get-groups")
    .then(response => response.json())
    .then(data => setGroups(data))
   
  }, []);

  return (
    <Container>
      {groups.groups.map((group) => (
        <ItemContainer>
          <div>{group.name}</div>
          { group.students.map( (student) => 
            <div>{student}</div>
           ) }  
        </ItemContainer>
      ))}
    </Container>
  );
}

export default ViewContainer;
