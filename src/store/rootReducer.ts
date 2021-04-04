import { combineReducers } from "@reduxjs/toolkit";
import { reducer as baseReducer, BaseSlicer } from "src/slices/base";
import { reducer as booksReducer, BooksSlicer } from "src/slices/books";

export interface StoreState {
  base: BaseSlicer;
  books: BooksSlicer;
}

const rootReducer = combineReducers<StoreState>({
  base: baseReducer,
  books: booksReducer,
});

export default rootReducer;
