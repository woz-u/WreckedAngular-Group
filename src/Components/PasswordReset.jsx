import React, { emailRef } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase";

const PasswordReset = () => {
  const forgotPass = (e) => {
    e.preventDefault();
    sendPasswordResetEmail(auth, emailRef.current.value);
    alert(
      `If there is an account associated with this email, we will send an email for reset to " ${emailRef.current.value}`
    );
  };

  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="flex items-center"></div>
        <div className="text-sm">
          <button onClick={forgotPass} className="text-white text-center">
            Forgot your password?
          </button>
        </div>
      </div>
    </div>
  );
};

export default PasswordReset;
