import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "src/store";
import { clearBook, getBook } from "src/slices/books";
import { PageContainer, PageHeading, Flex } from "src/styles/layout";
import {
  BookDetails,
  BookInformations,
  BookPhoto,
  Description,
  RateBook,
} from "src/styles/detailsBookView";
import { Typography } from "@material-ui/core";

const DetailsBookView = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const bookId = location.pathname.split("/")[2];
  const { current: book, list } = useSelector((state) => state.books);

  useEffect(() => {
    dispatch(getBook(bookId));

    return () => dispatch(clearBook());
  }, [bookId, list, dispatch]);

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
            <RateBook>
              <Typography variant="body2">Rate Book:</Typography>
            </RateBook>
          </BookInformations>
        </BookDetails>
      </PageContainer>
    </>
  );
};

export default DetailsBookView;
