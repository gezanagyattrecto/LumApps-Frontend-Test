import React, { FC } from "react";
import { Redirect, Route, Switch } from "react-router";
import Home from "./pages/Home/Home";
import Header from "./components/header/Header";
import CharacterDetails from "./pages/CharacterDetails/CharacterDetails";
import { ToastContainer } from "react-toastify";

const App: FC = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/details/:id" component={CharacterDetails} />
        <Redirect to="/home" />
      </Switch>
      <ToastContainer />
    </div>
  );
};

export default App;
