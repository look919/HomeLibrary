import React, { FC } from "react";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert, { AlertProps } from "@material-ui/lab/Alert";
import { useDispatch, useSelector } from "src/store";
import { setToast } from "src/slices/base";

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

interface ToastProps {
  status: "error" | "success";
  message: string;
}

const Toast: FC<ToastProps> = ({ status, message }) => {
  const dispatch = useDispatch();
  const toast = useSelector((state) => state.base.toast);

  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }
    dispatch(
      setToast({
        error: false,
        success: false,
      })
    );
  };

  if (!toast.error && !toast.success) return null;

  return (
    <Snackbar open={true} autoHideDuration={3000} onClose={handleClose}>
      <Alert onClose={handleClose} severity={status}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default Toast;
