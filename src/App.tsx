import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { GlobalStyles, Theme } from "src/styles";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles theme={Theme} />
      <Header />
      <Switch>
        <Route exact path="/" component={Header} />
        <Route exact path="/skills" component={Header} />
        <Route component={Header} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
