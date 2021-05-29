import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk } from "src/store";
import { Book } from "src/types";

type UpdateBookOmit = Omit<Book, "id">;
type UpdateBook = {
  [P in keyof UpdateBookOmit]?: UpdateBookOmit[P];
} & { id: string };

export interface BooksSlicer {
  list: Book[];
  current: Book | null;
  isListLoaded: boolean;
}
const initialState: BooksSlicer = {
  list: [],
  current: null,
  isListLoaded: false,
};

const slice = createSlice({
  name: "books",
  initialState,
  reducers: {
    getAllBooks(state: BooksSlicer, action: PayloadAction<{ books: Book[] }>) {
      state.list = action.payload.books;
      state.isListLoaded = true;
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
    updateBook(state: BooksSlicer, action: PayloadAction<UpdateBook>) {
      const { id, rating } = action.payload;
      const currentBookIndex = state.list.findIndex((book) => book.id === id);

      if (currentBookIndex === -1) return;
      if (rating) state.list[currentBookIndex].rating = rating;

      localStorage.setItem("books", JSON.stringify(state.list));
    },
    deleteBook(state: BooksSlicer, action: PayloadAction<{ bookId: string }>) {
      state.list = state.list.filter(
        (book) => book.id !== action.payload.bookId
      );
      state.current = null;

      localStorage.setItem("books", JSON.stringify(state.list));
    },
  },
});

export const reducer = slice.reducer;

export const getAllBooks =
  (books: Book[]): AppThunk =>
  async (dispatch) => {
    dispatch(slice.actions.getAllBooks({ books }));
  };
export const addBook =
  (book: Book): AppThunk =>
  async (dispatch) => {
    dispatch(slice.actions.addBook({ book }));
  };
export const getBook =
  (bookId: string): AppThunk =>
  async (dispatch) => {
    dispatch(slice.actions.getBook({ bookId }));
  };
export const clearBook = (): AppThunk => async (dispatch) => {
  dispatch(slice.actions.clearBook());
};
export const updateBook =
  (book: UpdateBook): AppThunk =>
  async (dispatch) => {
    dispatch(slice.actions.updateBook(book));
  };
export const deleteBook =
  (bookId: string): AppThunk =>
  async (dispatch) => {
    dispatch(slice.actions.deleteBook({ bookId }));
  };

export default slice;
