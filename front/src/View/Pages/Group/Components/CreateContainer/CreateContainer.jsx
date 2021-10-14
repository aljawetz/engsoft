import React, { useState } from "react";
import { Container } from "./style";

function CreateContainer() {

  return (
    <Container>
      <form action="/student/create-group" method="post">
          <input
            name="group_name"
            type="text"
          />
        <button type="submit">Criar grupo</button>
      </form>
    </Container>
  );
}

export default CreateContainer;
