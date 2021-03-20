import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk } from "src/store";

export interface BaseSlicer {
  refreshReq: boolean;
  loading?: boolean;
  page: number;
  limit: number;
}
const initialState: BaseSlicer = {
  refreshReq: false,
  loading: false,
  page: 0,
  limit: 10,
};

const slice = createSlice({
  name: "base",
  initialState,
  reducers: {
    setRefreshReq(state: BaseSlicer) {
      state.refreshReq = !state.refreshReq;
    },
    setLoadingReq(
      state: BaseSlicer,
      action: PayloadAction<{ loading: boolean }>
    ) {
      state.loading = action.payload.loading;
    },
    resetPaginationReq(state: BaseSlicer) {
      state.page = 0;
      state.limit = 10;
    },
  },
});

export const reducer = slice.reducer;

export const refreshReq = (): AppThunk => async (dispatch) => {
  dispatch(slice.actions.setRefreshReq());
};
export const setLoading = (loading: boolean): AppThunk => async (dispatch) => {
  dispatch(slice.actions.setLoadingReq({ loading }));
};
export const resetPagination = (): AppThunk => async (dispatch) => {
  dispatch(slice.actions.resetPaginationReq());
};

export default slice;
