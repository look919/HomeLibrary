import React, { useState, ChangeEvent } from "react";
import { PageContainer, PageHeading } from "src/styles/layout";
import {
  Box,
  Table,
  TableRow,
  TableBody,
  TableCell,
  TablePagination,
  SvgIcon,
} from "@material-ui/core";
import PersonIcon from "@material-ui/icons/Person";
import { useSelector } from "src/store";
import NoBooks from "./NoBooks";
import Filters from "./Filters";
import { filterBooks, applyPagination, formatYear, onChange } from "src/consts";
import { StyledLink } from "src/styles/layout";
import {
  StyledTableContainer,
  StyledTableHead,
  StyledTableRow,
  NoTableCell,
  BookTitleCell,
  BookImage,
  DetailsCell,
} from "src/styles/booksView";
import { Book, BooksFilters } from "src/types";

const ListViewBooks = () => {
  const { list: books, isListLoaded } = useSelector((state) => state.books);
  const [page, setPage] = useState<number>(0);
  const [limit, setLimit] = useState<number>(10);
  const [filters, setFilters] = useState<BooksFilters>({
    title: "",
    author: "",
    pages: null,
    year: null,
    pagesCompare: null,
    yearCompare: null,
  });

  const filteredBooks = filterBooks(books, filters);
  const paginatedBooks = applyPagination(filteredBooks, page, limit);

  const onPageChange = (e: any, newPage: number) => setPage(newPage);
  const onLimitChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPage(0);
    setLimit(parseInt(e.target.value));
  };

  if (!isListLoaded) return null;
  if (!books.length) return <NoBooks />;

  return (
    <PageContainer>
      <PageHeading>Looking for a specific book?</PageHeading>
      <Filters
        filters={filters}
        onFiltersChange={(e: ChangeEvent<HTMLInputElement>) =>
          onChange(e, filters, setFilters)
        }
      />
      <StyledTableContainer>
        <Table>
          <StyledTableHead>
            <TableRow>
              <NoTableCell align="center">No.</NoTableCell>
              <TableCell>Book</TableCell>
              <DetailsCell align="center">Release Year</DetailsCell>
              <DetailsCell align="center">Pages</DetailsCell>
            </TableRow>
          </StyledTableHead>
          <TableBody>
            {paginatedBooks.map((book: Book, i: number) => {
              const paginatedIndex = page * limit + i;

              return (
                <StyledTableRow $isRowEven={i % 2 === 0} key={paginatedIndex}>
                  <NoTableCell align="center">{paginatedIndex + 1}</NoTableCell>
                  <BookTitleCell>
                    <BookImage
                      src={require(`../../${book.photo}`).default}
                      alt="book"
                    />
                    <Box display="flex" flexDirection="column">
                      <StyledLink to={`/book/${book.id}`}>
                        {book.title}
                      </StyledLink>
                      <Box display="flex">
                        <SvgIcon fontSize="small" component={PersonIcon} />{" "}
                        <span> {book.author}</span>
                      </Box>
                    </Box>
                  </BookTitleCell>
                  <DetailsCell align="center">
                    {formatYear(book.year)}
                  </DetailsCell>
                  <DetailsCell align="center">{book.pages}</DetailsCell>
                </StyledTableRow>
              );
            })}
          </TableBody>
        </Table>
        <TablePagination
          component="div"
          count={filteredBooks.length}
          onChangePage={onPageChange}
          onChangeRowsPerPage={onLimitChange}
          page={page}
          rowsPerPage={limit}
          rowsPerPageOptions={[5, 10, 25]}
        />
      </StyledTableContainer>
    </PageContainer>
  );
};

export default ListViewBooks;
