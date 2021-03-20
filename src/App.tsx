import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { GlobalStyles, Theme } from "src/styles";
import { ThemeProvider } from "styled-components";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={Theme}>
        <GlobalStyles />
        <Header />
        <Switch>
          <Route exact path="/" component={Header} />
          <Route exact path="/skills" component={Header} />
          <Route component={Header} />
        </Switch>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
