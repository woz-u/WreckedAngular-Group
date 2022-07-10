import React, { useState } from "react";
import { AiFillLock, AiOutlineMail } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import { auth, provider } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { GoogleButton } from 'react-google-button'

const PasswordReset = () => {
  const [user, loading] = useAuthState(auth);
  const [email, setEmail] = useState("");
  

  return (
    <div className="bg-slate-800 pb-10">
      <div className="max-w-[400px] mx-auto min-h-[600px] px-4 py-20 bg-slate-800">
        <h1 className="text-2xl font-bold text-white text-center">Create An Account</h1>
        {error ? <p className="bg-red-300 p-3 my-2">{error}</p> : null}
        <form onSubmit={handleSubmit}>
          <div className="my-4 text-white">
            <label>Email</label>
            <div className="my-2 w-full relative rounded-2xl shadow-xl">
              <input
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 bg-primary border border-input rounded-2xl text-slate-800"
                type="email"
              />
              <AiOutlineMail className="absolute right-2 top-3 text-gray-800" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PasswordReset;
