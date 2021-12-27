import Navbar from "./components/Navbar";
import Home from "./components/Home";
import ProjectsPage from "./components/ProjectsPage";
import ProjectPage from "./components/ProjectPage";
import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Route, Switch, useLocation } from "react-router-dom";
import "./style/main.scss";
import NoMatchPage from "./components/NoMatchPage";



// function useQuery() {
//   const { search } = useLocation();

//   return React.useMemo(() => new URLSearchParams(search), [search]);
// }

function App() {
  // let query = useQuery();

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
          <Route exact path="/project">
            <ProjectPage/>
          </Route>
          {/* <Route>
            <NoMatchPage/>
          </Route> */}
        </Switch>
      </main>
    </Router>
  );
}

export default App;
