import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { GlobalStyles, Theme } from "src/styles";
import { ThemeProvider } from "styled-components";
import { useDispatch, useSelector } from "src/store";
import { getAllBooks } from "./slices/books";
import Header from "./components/Header";
import BooksListView from "./views/BooksListView";
import AddNewBook from "./views/AddNewBook";
import DetailsBookView from "./views/DetailsBookView";
import { Book } from "./types";
import TemplateBooks from "src/dummyBooksData.json";

function App() {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books.list);

  useEffect(() => {
    const booksInStorage = localStorage.getItem("books") || null;
    const books: Book[] = booksInStorage
      ? JSON.parse(booksInStorage)
      : TemplateBooks;

    dispatch(getAllBooks(books));
  }, [dispatch]);

  if (!books.length) return null;

  return (
    <BrowserRouter>
      <ThemeProvider theme={Theme}>
        <GlobalStyles />
        <Header />
        <Switch>
          <Route exact path="/" component={BooksListView} />
          <Route exact path="/add" component={AddNewBook} />
          <Route path="/book/:id" component={DetailsBookView} />
        </Switch>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
