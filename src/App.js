import React, { Fragment } from "react";
import { Route, Switch } from "react-router";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Resume from "./pages/Resume";

import "./App.scss";
import NavHeader from "./components/NavHeader";
import RecipePage from "./pages/RecipePage";
import SpeedGamePage from "./pages/SpeedGamePage";
import SocialWebAppPage from "./pages/SocialWebAppPage";
import RockShopPage from "./pages/RockShopPage";

function App() {
  return (
    <Fragment>
      <NavHeader />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/resume" component={Resume} />
        <Route exact path="/about" component={About} />
        <Route exact path="/recipepage" component={RecipePage} />
        <Route exact path="/speedgamepage" component={SpeedGamePage} />
        <Route exact path="/socialWebAppPage" component={SocialWebAppPage} />
        <Route exact path="/rockShopPage" component={RockShopPage} />
      </Switch>
    </Fragment>
  );
}

export default App;
