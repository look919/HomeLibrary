import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";

import { useDispatch } from "src/store";
import { getAllBooks } from "src/slices/books";
import BooksFromTemplate from "src/dummyBooksData.json";
import {
  NoBooksButtonContainer,
  NoBooksDataImage,
  NoBooksDataView,
} from "src/styles/booksView";
import { PageContainer, PageHeading } from "src/styles/layout";
import BookImage from "src/images/new-book.png";

const NoBooks = () => {
  const dispatch = useDispatch();

  const handleLoadBooksFromTemplate = () => {
    localStorage.setItem("books", JSON.stringify(BooksFromTemplate));
    dispatch(getAllBooks(BooksFromTemplate));
  };

  return (
    <PageContainer>
      <NoBooksDataView>
        <NoBooksDataImage src={BookImage} alt="book" />
        <PageHeading>No Books found!</PageHeading>
        <NoBooksButtonContainer>
          <Button
            variant="contained"
            color="primary"
            component={Link}
            to="/add"
          >
            Add Book
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={handleLoadBooksFromTemplate}
          >
            Load Books From Template
          </Button>
        </NoBooksButtonContainer>
      </NoBooksDataView>
    </PageContainer>
  );
};

export default NoBooks;
