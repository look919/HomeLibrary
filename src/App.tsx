import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { GlobalStyles, Theme } from "src/styles";
import { ThemeProvider } from "styled-components";
import { useDispatch } from "src/store";
import { getAllBooks } from "./slices/books";
import Header from "./components/Header";
import useGetBooksFromStorage from "./hooks/useGetBooksFromStorage";
import BooksListView from "./views/BooksListView";
import AddNewBook from "./views/AddNewBook";
import DetailsBookView from "./views/DetailsBookView";

function App() {
  const dispatch = useDispatch();
  const booksFromStorage = useGetBooksFromStorage();

  useEffect(() => {
    dispatch(getAllBooks(booksFromStorage));
  }, [dispatch, booksFromStorage]);

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
