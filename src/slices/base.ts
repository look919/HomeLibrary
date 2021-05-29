import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk } from "src/store";

interface Toast {
  success?: boolean;
  error?: boolean;
}

export interface BaseSlicer {
  toast: Toast;
}
const initialState: BaseSlicer = {
  toast: {
    success: false,
    error: false,
  },
};

const slice = createSlice({
  name: "base",
  initialState,
  reducers: {
    setToastAction(state: BaseSlicer, action: PayloadAction<{ toast: Toast }>) {
      const { error, success } = action.payload.toast;

      if (error !== undefined) state.toast.error = error;
      if (success !== undefined) state.toast.success = success;
    },
  },
});

export const reducer = slice.reducer;

export const setToast =
  (toast: Toast): AppThunk =>
  async (dispatch) => {
    dispatch(slice.actions.setToastAction({ toast }));
  };

export default slice;
