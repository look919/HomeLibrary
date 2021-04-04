import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk } from "src/store";
import { Book } from "src/types";

export interface BooksSlicer {
  list: Book[];
}
const initialState: BooksSlicer = {
  list: [],
};

const slice = createSlice({
  name: "books",
  initialState,
  reducers: {
    getAllBooks(state: BooksSlicer, action: PayloadAction<{ books: Book[] }>) {
      state.list = action.payload.books;
    },
  },
});

export const reducer = slice.reducer;

export const getAllBooks = (books: Book[]): AppThunk => async (dispatch) => {
  dispatch(slice.actions.getAllBooks({ books }));
};

export default slice;
