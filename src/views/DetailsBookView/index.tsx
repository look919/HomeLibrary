import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "src/store";
import { clearBook, getBook } from "src/slices/books";
import { PageContainer, PageHeading, Flex } from "src/styles/layout";
import { BookDetails } from "src/styles/detailsBookView";

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
        <BookDetails></BookDetails>
      </PageContainer>
    </>
  );
};

export default DetailsBookView;
