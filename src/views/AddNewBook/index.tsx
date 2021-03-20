import React, { useState, ChangeEvent } from "react";
import { useHistory } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { format } from "date-fns";
import { useDispatch } from "src/store";
import { setToast } from "src/slices/base";
import { PageContainer, PageHeading, Flex } from "src/styles/layout";
import {
  AddBookForm,
  AddBookTextField,
  AddBookTextFieldSmall,
  AddBookBtn,
} from "src/styles/addBook";
import { Book } from "src/types";
import Toast from "src/components/Toast";

const AddNewBook = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [sendAttempt, setSendAttempt] = useState<boolean>(false);
  const [book, setBook] = useState<Book>({
    id: uuidv4(),
    name: "",
    author: "",
    releaseYear: parseInt(format(Date.now(), "yyyy")),
    pages: 0,
  });

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setBook({
      ...book,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddBook = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSendAttempt(true);

    if (!book.name || !book.author || !book.releaseYear || !book.pages)
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
            value={book.name}
            onChange={onChange}
            label="Name"
            variant="outlined"
            error={!book.name && sendAttempt}
          />
          <AddBookTextField
            name="author"
            value={book.author}
            onChange={onChange}
            label="Author Name"
            variant="outlined"
            error={!book.author && sendAttempt}
          />
          <Flex>
            <AddBookTextFieldSmall
              name="releaseYear"
              value={book.releaseYear}
              onChange={onChange}
              label="Release Year"
              variant="outlined"
              error={!book.releaseYear && sendAttempt}
              type="number"
              inputProps={{ style: { textAlign: "right" } }}
            />
            <AddBookTextFieldSmall
              name="pages"
              value={book.pages}
              onChange={onChange}
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
