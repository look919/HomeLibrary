import { Book } from "src/types";

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

interface BookFilters extends Book {
  numOfPages: "BiggerThan" | "SmallerThan";
  releaseYear: "BiggerThan" | "SmallerThan";
}

export function filterBooks<T extends Book>(
  books: T[],
  filters: BookFilters
): T[] {
  return books.filter((book: T) => {
    return book.title.toLowerCase().includes(filters.title.toLowerCase()) &&
      book.author.toLowerCase().includes(filters.author.toLowerCase()) &&
      filters.numOfPages === "BiggerThan"
      ? book.pages > filters.pages
      : book.pages < filters.pages && filters.releaseYear === "BiggerThan"
      ? book.year > filters.year
      : book.year < filters.year;
  });
}

export function applyPagination<T>(
  items: T[],
  page: number,
  limit: number
): T[] {
  return items.slice(page * limit, page * limit + limit);
}
