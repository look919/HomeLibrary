import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk } from "src/store";
import { Book } from "src/types";

export interface BooksSlicer {
  books: Book[];
}
const initialState: BooksSlicer = {
  books: [],
};

const slice = createSlice({
  name: "books",
  initialState,
  reducers: {
    getAllBooks(state: BooksSlicer, action: PayloadAction<{ books: Book[] }>) {
      state.books = action.payload.books;
    },
  },
});

export const reducer = slice.reducer;

export const getAllBooks = (books: Book[]): AppThunk => async (dispatch) => {
  dispatch(slice.actions.getAllBooks({ books }));
};

export default slice;
