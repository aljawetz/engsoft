import React from "react";
import { Container } from "./style";
import ListContainer from "./Components/ListContainer/ListContainer";
import CreateContainer from "./Components/CreateContainer/CreateContainer";

function Group() {
  return (
    <Container>
      <ListContainer />
      <CreateContainer />
    </Container>
  );
}

export default Group;
