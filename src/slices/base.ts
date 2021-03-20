import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk } from "src/store";

interface Toast {
  success?: boolean;
  error?: boolean;
}

export interface BaseSlicer {
  refreshReq?: boolean;
  loading?: boolean;
  toast: Toast;
}
const initialState: BaseSlicer = {
  refreshReq: false,
  loading: false,
  toast: {
    success: false,
    error: false,
  },
};

const slice = createSlice({
  name: "base",
  initialState,
  reducers: {
    setRefreshReqAction(state: BaseSlicer) {
      state.refreshReq = !state.refreshReq;
    },
    setLoadingAction(
      state: BaseSlicer,
      action: PayloadAction<{ loading: boolean }>
    ) {
      state.loading = action.payload.loading;
    },
    setToastAction(state: BaseSlicer, action: PayloadAction<{ toast: Toast }>) {
      const { error, success } = action.payload.toast;

      if (error !== undefined) state.toast.error = error;
      if (success !== undefined) state.toast.success = success;
    },
  },
});

export const reducer = slice.reducer;

export const refreshReq = (): AppThunk => async (dispatch) => {
  dispatch(slice.actions.setRefreshReqAction());
};
export const setLoading = (loading: boolean): AppThunk => async (dispatch) => {
  dispatch(slice.actions.setLoadingAction({ loading }));
};
export const setToast = (toast: Toast): AppThunk => async (dispatch) => {
  dispatch(slice.actions.setToastAction({ toast }));
};

export default slice;
