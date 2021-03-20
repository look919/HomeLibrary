import React, { useState, ChangeEvent } from "react";
import { PageContainer, PageHeading } from "src/styles/layout";
import {
  Table,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  TablePagination,
} from "@material-ui/core";
import books from "src/dummyBooksData.json";
import { Book } from "src/types";

const ListViewBooks = () => {
  const [page, setPage] = useState<number>(0);
  const [limit, setLimit] = useState<number>(10);

  if (!books) return null;
  return (
    <PageContainer>
      <PageHeading>Looking for a specific book?</PageHeading>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="right">No.</TableCell>
            <TableCell>Book</TableCell>
            <TableCell align="center">Release Year</TableCell>
            <TableCell align="center">Pages</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {books.map((book: Book, i) => {
            const paginatedIndex = page * limit + i;

            return (
              <TableRow key={book.id + paginatedIndex}>
                <TableCell align="right">{paginatedIndex}</TableCell>
                <TableCell>{book.author}</TableCell>
                <TableCell align="center">{book.year}</TableCell>
                <TableCell align="center">{book.pages}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
      <TablePagination
        component="div"
        count={books.length}
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
