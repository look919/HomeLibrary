import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk } from "src/store";
import { Book } from "src/types";

export interface BooksSlicer {
  list: Book[];
  current: Book;
}
const initialState: BooksSlicer = {
  list: [],
  current: {
    id: "",
    title: "",
    author: "",
    year: 0,
    pages: 0,
    photo: "",
    rating: 0,
  },
};

const slice = createSlice({
  name: "books",
  initialState,
  reducers: {
    getAllBooks(state: BooksSlicer, action: PayloadAction<{ books: Book[] }>) {
      state.list = action.payload.books;
    },
    addBook(state: BooksSlicer, action: PayloadAction<{ book: Book }>) {
      state.list.push(action.payload.book);
    },
    getBook(state: BooksSlicer, action: PayloadAction<{ bookId: string }>) {
      const currentBook = state.list.find(
        (book) => book.id === action.payload.bookId
      );

      if (!currentBook) return;
      state.current = currentBook;
    },
    clearBook(state: BooksSlicer) {
      state.current = initialState.current;
    },
  },
});

export const reducer = slice.reducer;

export const getAllBooks = (books: Book[]): AppThunk => async (dispatch) => {
  dispatch(slice.actions.getAllBooks({ books }));
};
export const addBook = (book: Book): AppThunk => async (dispatch) => {
  dispatch(slice.actions.addBook({ book }));
};
export const getBook = (bookId: string): AppThunk => async (dispatch) => {
  dispatch(slice.actions.getBook({ bookId }));
};
export const clearBook = (): AppThunk => async (dispatch) => {
  dispatch(slice.actions.clearBook());
};

export default slice;
