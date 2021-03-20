import { title } from "node:process";
import { Book, BookFilters } from "src/types";

export const onChange = <T>(
  e: any,
  state: T,
  setState: (value: React.SetStateAction<T>) => void
) => {
  setState({
    ...state,
    [e.target.name]: e.target.value,
  });
};

export function filterBooks<T extends Book>(
  books: T[],
  filters: BookFilters
): T[] {
  return books.filter((book: T) => {
    const { title, author, pages, year, pagesCompare, yearCompare } = filters;

    let filteredBook =
      book.title.toLowerCase().includes(title.toLowerCase()) &&
      book.author.toLowerCase().includes(author.toLowerCase());

    if (filteredBook) {
      if (pages && pagesCompare) {
        switch (pagesCompare) {
          case "BiggerThan":
            filteredBook = filteredBook && book.pages > pages;
            break;
          case "SmallerThan":
            filteredBook = filteredBook && book.pages < pages;
            break;
        }
      }
      if (year && yearCompare) {
        switch (yearCompare) {
          case "BiggerThan":
            filteredBook = filteredBook && book.pages > year;
            break;
          case "SmallerThan":
            filteredBook = filteredBook && book.pages < year;
            break;
        }
      }
    }

    return filteredBook;
  });
}

export function applyPagination<T>(
  items: T[],
  page: number,
  limit: number
): T[] {
  return items.slice(page * limit, page * limit + limit);
}

export const formatYear = (year: number) => {
  let yearString = "";
  switch (Math.sign(year)) {
    case 1 | 0 | -0:
      yearString = year.toString();
      break;
    case -1:
      yearString = year.toString().substring(1) + " age bc";
  }

  return yearString;
};
