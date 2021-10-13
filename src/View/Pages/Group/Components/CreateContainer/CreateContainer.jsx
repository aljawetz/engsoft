import React, { useState } from "react";
import { Container } from "./style";
import { Student } from "../../../../../Controller/Users/Student.js";

function CreateContainer() {
  const student = new Student();

  const [value, setValue] = useState("");
  const [response, setResponse] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setResponse(student.create_group(value));
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <label>
          Group name:
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
      {response}
    </Container>
  );
}

export default CreateContainer;
