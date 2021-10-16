import React from "react";
import {Link} from 'react-router-dom'

import { Navbar } from "./styles";

export function NavbarContainer() {
  return (
  <Navbar>
    <Link to ='/'>HOME</Link>
    <Link to ='/student/create-group'>CREATE GROUP</Link>
    <Link to ='/student/view-groups'>VIEW GROUPS</Link>
  </Navbar>
  )
}

export default NavbarContainer;
