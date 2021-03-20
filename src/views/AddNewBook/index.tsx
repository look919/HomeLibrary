import React, { useState, ChangeEvent } from "react";
import { useHistory } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { format } from "date-fns";
import { useDispatch } from "src/store";
import Toast from "src/components/Toast";
import { setToast } from "src/slices/base";
import { PageContainer, PageHeading, Flex } from "src/styles/layout";
import {
  AddBookForm,
  AddBookTextField,
  AddBookTextFieldSmall,
  AddBookBtn,
} from "src/styles/addBook";
import { onChange } from "src/consts";
import { Book } from "src/types";

const AddNewBook = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [sendAttempt, setSendAttempt] = useState<boolean>(false);
  const [book, setBook] = useState<Book>({
    id: uuidv4(),
    title: "",
    author: "",
    year: parseInt(format(Date.now(), "yyyy")),
    pages: 0,
  });

  const handleAddBook = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSendAttempt(true);

    if (!book.title || !book.author || !book.year || !book.pages)
      return dispatch(
        setToast({
          error: true,
        })
      );

    localStorage.setItem("books", JSON.stringify(book));
    history.push("/");
  };

  return (
    <>
      <PageContainer>
        <PageHeading>Add new book</PageHeading>
        <AddBookForm onSubmit={handleAddBook}>
          <AddBookTextField
            name="name"
            value={book.title}
            onChange={(e) => onChange(e, book, setBook)}
            label="Name"
            variant="outlined"
            error={!book.title && sendAttempt}
          />
          <AddBookTextField
            name="author"
            value={book.author}
            onChange={(e) => onChange(e, book, setBook)}
            label="Author Name"
            variant="outlined"
            error={!book.author && sendAttempt}
          />
          <Flex>
            <AddBookTextFieldSmall
              name="releaseYear"
              value={book.year}
              onChange={(e) => onChange(e, book, setBook)}
              label="Release Year"
              variant="outlined"
              error={!book.year && sendAttempt}
              type="number"
              inputProps={{ style: { textAlign: "right" } }}
            />
            <AddBookTextFieldSmall
              name="pages"
              value={book.pages}
              onChange={(e) => onChange(e, book, setBook)}
              label="Number of Pages"
              variant="outlined"
              error={!book.pages && sendAttempt}
              type="number"
              inputProps={{ style: { textAlign: "right" } }}
            />
          </Flex>
          <AddBookBtn type="submit" variant="contained" color="primary">
            Add Book
          </AddBookBtn>
        </AddBookForm>
      </PageContainer>
      <Toast status="error" message="Invalid Data Provided" />
    </>
  );
};

export default AddNewBook;
