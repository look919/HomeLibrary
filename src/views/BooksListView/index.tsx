import React, { useState, ChangeEvent } from "react";
import { PageContainer, PageHeading } from "src/styles/layout";
import {
  Box,
  Paper,
  TableContainer,
  TableRow,
  TableBody,
  TableCell,
  TablePagination,
  SvgIcon,
} from "@material-ui/core";
import PersonIcon from "@material-ui/icons/Person";
import Filters from "./Filters";
import booksJSON from "src/dummyBooksData.json";
import { filterBooks, applyPagination, formatYear, onChange } from "src/consts";
import { StyledLink } from "src/styles/layout";
import {
  StyledTable,
  StyledTableHead,
  NoTableCell,
  BookTitleCell,
} from "src/styles/test";
import { Book, BooksFilters } from "src/types";

const ListViewBooks = () => {
  const books: Book[] = JSON.parse(JSON.stringify(booksJSON));
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

  if (!books) return null;

  return (
    <PageContainer>
      <PageHeading>Looking for a specific book?</PageHeading>
      <Filters
        filters={filters}
        onFiltersChange={(e: ChangeEvent<HTMLInputElement>) =>
          onChange(e, filters, setFilters)
        }
      />
      <TableContainer component={Paper}>
        <StyledTable>
          <StyledTableHead>
            <TableRow>
              <NoTableCell align="right">No.</NoTableCell>
              <TableCell>Book</TableCell>
              <TableCell align="center">Release Year</TableCell>
              <TableCell align="center">Pages</TableCell>
            </TableRow>
          </StyledTableHead>
          <TableBody>
            {paginatedBooks.map((book: Book, i: number) => {
              const paginatedIndex = page * limit + i;

              return (
                <TableRow key={paginatedIndex}>
                  <NoTableCell align="right">{paginatedIndex + 1}</NoTableCell>
                  <BookTitleCell>
                    <img
                      src={require(`../../${book.photo}`).default}
                      alt="book"
                    />
                    <Box display="flex" flexDirection="column">
                      <StyledLink /* to={`/${book.id}`} */ to={"/add"}>
                        {book.title}
                      </StyledLink>
                      <Box display="flex">
                        <SvgIcon fontSize="small" component={PersonIcon} />{" "}
                        <span> {book.author}</span>
                      </Box>
                    </Box>
                  </BookTitleCell>
                  <TableCell align="center">{formatYear(book.year)}</TableCell>
                  <TableCell align="center">{book.pages}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </StyledTable>
        <TablePagination
          component="div"
          count={filteredBooks.length}
          onChangePage={(e: any, newPage: number) => setPage(newPage)}
          onChangeRowsPerPage={(e: ChangeEvent<HTMLInputElement>) =>
            setLimit(parseInt(e.target.value))
          }
          page={page}
          rowsPerPage={limit}
          rowsPerPageOptions={[5, 10, 25]}
        />
      </TableContainer>
    </PageContainer>
  );
};

export default ListViewBooks;
