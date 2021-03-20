import { combineReducers } from "@reduxjs/toolkit";
import { reducer as baseSlicer, BaseSlicer } from "src/slices/base";

export interface StoreState {
  base: BaseSlicer;
}

const rootReducer = combineReducers<StoreState>({
  base: baseSlicer,
});

export default rootReducer;
