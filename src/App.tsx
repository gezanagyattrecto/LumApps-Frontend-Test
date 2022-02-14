import React, {FC} from "react";
import {Redirect, Route, Switch} from "react-router";
import Home from "./pages/Home/Home";
import Header from "./components/header/Header";
import Hero from "./pages/Hero/Hero";


const App: FC = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/hero" component={Hero} />
        <Redirect to="/home" />
      </Switch>
    </div>
  );
};

export default App;
