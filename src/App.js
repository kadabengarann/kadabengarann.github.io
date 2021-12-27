import Navbar from "./components/Navbar";
import Home from "./components/Home";
import ProjectsPage from "./components/ProjectsPage";
import ProjectPage from "./components/ProjectPage";
import React from 'react';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./style/main.scss";

function App() {
  return (
    <Router>
      <header>
        <Navbar />
      </header>
      <div className="loader"></div>
      <main data-scroll-container>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/projects">
            <ProjectsPage />
          </Route>
          <Route exact path="/project/:projectId">
            <ProjectPage/>
          </Route>
          <Route>{/* <NoMatchPage/> */}</Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;