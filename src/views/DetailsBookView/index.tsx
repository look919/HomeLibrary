import React, { useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { Button, Typography } from "@material-ui/core";
import { useDispatch, useSelector } from "src/store";
import { clearBook, deleteBook, getBook } from "src/slices/books";
import RateBook from "./RateBook";
import { PageContainer, PageHeading, Flex } from "src/styles/layout";
import {
  BookDetails,
  BookInformations,
  BooksOptionsContainer,
  BookPhoto,
  Description,
} from "src/styles/detailsBookView";

const DetailsBookView = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();
  const bookId = location.pathname.split("/")[2];
  const book = useSelector((state) => state.books.current);

  useEffect(() => {
    dispatch(getBook(bookId));

    return () => dispatch(clearBook());
  }, [bookId, dispatch]);

  const handleDeleteBook = () => {
    dispatch(deleteBook(bookId));
    history.push("/");
  };

  if (!book) return null;

  return (
    <>
      <PageContainer>
        <PageHeading>{book.title}</PageHeading>
        <BookDetails>
          <BookPhoto src={require(`../../${book.photo}`).default} alt="book" />
          <BookInformations>
            <Typography variant="body1">Author: {book.author}</Typography>
            <Flex>
              <Typography variant="body2" style={{ marginRight: "10px" }}>
                Release Year: {book.year}
              </Typography>
              <Typography variant="body2">
                Number of pages: {book.pages}
              </Typography>
            </Flex>
            <Description>
              Description: Curabitur sed felis urna. Proin in nisl non dolor
              aliquam aliquam et hendrerit dui. Proin in sagittis ligula, et
              luctus massa. Suspendisse vehicula nulla eu elit pulvinar, quis
              finibus lacus pharetra. Maecenas vulputate scelerisque arcu.
              Quisque eget est non metus ultrices porta ullamcorper non risus.
              Mauris finibus, ante quis vulputate mattis, lectus lorem lobortis
              lacus, sed efficitur lorem mi condimentum nisl.
            </Description>
            <BooksOptionsContainer>
              <RateBook bookId={book.id} bookRating={book.rating} />
              <Button
                variant="contained"
                color="secondary"
                onClick={handleDeleteBook}
              >
                Delete Book
              </Button>
            </BooksOptionsContainer>
          </BookInformations>
        </BookDetails>
      </PageContainer>
    </>
  );
};

export default DetailsBookView;
