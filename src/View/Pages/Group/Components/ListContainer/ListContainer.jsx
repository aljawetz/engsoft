import React from "react";
import { Container } from "./style";
import { Student } from "../../../../../Controller/Users/Student.js";

function ListContainer() {
  const student = new Student();
  const groups = student.list_groups();

  return (
    <Container>
      {groups.map((group) => (
        <div>{group}</div>
      ))}
    </Container>
  );
}

export default ListContainer;
