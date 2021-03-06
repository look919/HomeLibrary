export interface Book {
  id: string;
  title: string;
  author: string;
  year: number;
  pages: number;
  photo: string;
  rating: number;
}

export interface BooksFilters {
  title: string;
  author: string;
  year: number | null;
  pages: number | null;
  pagesCompare: "BiggerThan" | "SmallerThan" | null;
  yearCompare: "BiggerThan" | "SmallerThan" | null;
}

export type ThemeType = "dark" | "light";
