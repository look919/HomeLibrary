import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { GlobalStyles, Theme } from "src/styles";
import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import BooksListView from "./views/BooksListView";
import AddNewBook from "./views/AddNewBook";
import DetailsBookView from "./views/DetailsBookView";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={Theme}>
        <GlobalStyles />
        <Header />
        <Switch>
          <Route exact path="/" component={BooksListView} />
          <Route exact path="/add" component={AddNewBook} />
          <Route path="/details/:id" component={DetailsBookView} />
        </Switch>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
