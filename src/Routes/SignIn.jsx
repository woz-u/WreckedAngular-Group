import React, { useState } from "react";
import { AiFillLock, AiOutlineMail } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import { signInWithPopup, signOut } from "firebase/auth";
import { auth, provider } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { GoogleButton } from "react-google-button";
import PasswordReset from "../Components/PasswordReset";

const SignIn = () => {
  const [user, loading] = useAuthState(auth);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { signIn } = UserAuth();

  const googleProvider = (e) => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const logOut = () => {
    signOut(auth)
      .then(() => {
        console.log("You logged out");
      })
      .catch((error) => {
        console(error.message);
      });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signIn(email, password);
      navigate("/Account");
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  };

  return (
    <div className="bg-slate-800 pb-10">
      <div className="max-w-[400px] mx-auto min-h-[600px] px-4 py-20 bg-slate-800">
        <h1 className="text-2xl font-bold text-white text-center">Sign In</h1>
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
          <div className="my-4 text-white">
            <label>Password</label>
            <div className="my-2 w-full relative rounded-2xl shadow-xl">
              <input
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 bg-primary border border-input rounded-2xl text-slate-800"
                type="password"
              />
              <AiFillLock className="absolute right-2 top-3 text-gray-800" />
            </div>
          </div>
          <button className="w-full my-2 p-3 bg-button text-btnText bg-indigo-700 text-btnText rounded-2xl shadow-xl text-white hover:bg-white hover:text-black">
            Sign in
          </button>
        </form>
          <PasswordReset />
        <p className="my-4 text-white text-center">
          Don't have an account? {' '}
          <Link to="/signup" className="text-accent text-center">
            Sign up
          </Link>
        </p>
        <div className="flex justify-center">
          {!user ? (
            <a
              onClick={googleProvider}
              className="p-2 block font-medium text-white hover:cursor-pointer hover:text-indigo-700"
            >
              <GoogleButton />
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default SignIn;
