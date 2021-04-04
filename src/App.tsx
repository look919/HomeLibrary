import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { GlobalStyles, Theme } from "src/styles";
import { ThemeProvider } from "styled-components";
import { useDispatch } from "src/store";
import { getAllBooks } from "./slices/books";
import Header from "./components/Header";
import BooksListView from "./views/BooksListView";
import AddNewBook from "./views/AddNewBook";
import DetailsBookView from "./views/DetailsBookView";
import TemplateBooks from "src/dummyBooksData.json";
import { Book } from "./types";

function App() {
  const dispatch = useDispatch();
  const booksInStorage = localStorage.getItem("books") || null;
  const books: Book[] = booksInStorage ? JSON.parse(booksInStorage) : [];

  if (!booksInStorage) dispatch(getAllBooks(TemplateBooks));
  else dispatch(getAllBooks(books));

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
