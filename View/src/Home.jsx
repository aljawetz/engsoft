import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

import Navbar from "./Components/Navbar";
import CreateGroup from "./Pages/Group/CreateGroup";
import ViewGroups from "./Pages/Group/viewGroups";
import LoginScreen from "./Pages/Login";

function Home() {
  return (
    <Router>
      <Navbar />

      <Switch>
        {/* Tela de Login */}
        <Route exact path='/'>
          <LoginScreen />
        </Route>
    
        {/* Routes dos estudantes */}
        <Route path="/student">
          {/* Criação de grupos */}
          <Route path="/student/create-group">
            <CreateGroup />
          </Route>

          {/* Visualização dos grupos */}
          <Route path="/student/view-groups">
            <ViewGroups />
          </Route>
        
        </Route>

      </Switch>
    
    </Router>
  );
}

export default Home;
