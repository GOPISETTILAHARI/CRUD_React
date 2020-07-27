import React from "react";
import MainContextProvider from "./Context/MainContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home";
import Topics from "./Components/Topics";
import NavBar from "./Components/NavBar";
function App() {
  return (
    <Router>
      <MainContextProvider>
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Topics" component={Topics} />
        </Switch>
      </MainContextProvider>
    </Router>
  );
}

export default App;
