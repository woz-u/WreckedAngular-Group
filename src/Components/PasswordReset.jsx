import { DialogActions, DialogContent, DialogContentText } from "@mui/material";
import { useRef } from "react";
import { UserAuth } from "../context/AuthContext";
import { TextField } from "@mui/material";

const PasswordReset = () => {
  const { setLoading, setAlert, setModal, modal, resetPassword } = UserAuth();
  const emailRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await resetPassword(emailRef.current.value);
      setModal({ ...modal, isOpen: false });
      setAlert({
        isAlert: true,
        severity: "success",
        message: "reset link has been sent to your email inbox",
        timeout: 8000,
        location: "main",
      });
    } catch (error) {
      setAlert({
        isAlert: true,
        severity: "error",
        message: error.message,
        timeout: 5000,
        location: "modal",
      });
    }
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <DialogContent dividers>
        <DialogContentText>Please enter your email address:</DialogContentText>
        <TextField
          autoFocus
          margin="normal"
          variant="standard"
          id="email"
          label="Email Address"
          type="email"
          fullWidth
          required
          inputRef={emailRef}
        />
      </DialogContent>
      <DialogActions>
        <button type="submit">Submit</button>
      </DialogActions>
    </form>
  );
};

export default PasswordReset;
