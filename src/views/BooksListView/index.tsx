import React, { useState, ChangeEvent } from "react";
import { PageContainer, PageHeading } from "src/styles/layout";
import {
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  TablePagination,
} from "@material-ui/core";
import Filters from "./Filters";
import booksJSON from "src/dummyBooksData.json";
import { filterBooks, applyPagination, formatYear, onChange } from "src/consts";
import { StyledTable, NoTableCell } from "src/styles/listView";
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
      <StyledTable>
        <TableHead>
          <TableRow>
            <NoTableCell align="right">No.</NoTableCell>
            <TableCell>Book</TableCell>
            <TableCell align="center">Release Year</TableCell>
            <TableCell align="center">Pages</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {paginatedBooks.map((book: Book, i) => {
            const paginatedIndex = page * limit + i;

            return (
              <TableRow key={paginatedIndex}>
                <NoTableCell align="right">{paginatedIndex + 1}</NoTableCell>
                <TableCell>{book.title + " " + book.author}</TableCell>
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
    </PageContainer>
  );
};

export default ListViewBooks;
