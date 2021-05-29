import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { GlobalStyles, Theme, DarkTheme } from "src/styles";
import { ThemeProvider } from "styled-components";
import {
  createMuiTheme,
  ThemeProvider as MaterialThemeProvider,
} from "@material-ui/core/styles";
import { useDispatch } from "src/store";
import { getAllBooks } from "./slices/books";
import Header from "./components/Header";
import useGetBooksFromStorage from "./hooks/useGetBooksFromStorage";
import BooksListView from "./views/BooksListView";
import AddNewBook from "./views/AddNewBook";
import DetailsBookView from "./views/DetailsBookView";
import { ThemeType } from "./types";

function App() {
  const dispatch = useDispatch();
  const booksFromStorage = useGetBooksFromStorage();
  const [theme, setTheme] = useState<ThemeType>("light");

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
    dispatch(getAllBooks(booksFromStorage));
  }, [dispatch, booksFromStorage]);

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
