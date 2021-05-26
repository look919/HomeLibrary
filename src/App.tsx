import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { GlobalStyles, Theme, DarkTheme } from "src/styles";
import { ThemeProvider } from "styled-components";
import {
  createMuiTheme,
  ThemeProvider as MaterialThemeProvider,
} from "@material-ui/core/styles";
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
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  const materialTheme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: theme,
        },
      }),
    [theme]
  );

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
      <MaterialThemeProvider theme={materialTheme}>
        <ThemeProvider theme={theme === "light" ? Theme : DarkTheme}>
          <GlobalStyles />
          <Header theme={theme} themeToggler={themeToggler} />
          <Switch>
            <Route exact path="/" component={BooksListView} />
            <Route exact path="/add" component={AddNewBook} />
            <Route path="/book/:id" component={DetailsBookView} />
          </Switch>
        </ThemeProvider>
      </MaterialThemeProvider>
    </BrowserRouter>
  );
}

export default App;
