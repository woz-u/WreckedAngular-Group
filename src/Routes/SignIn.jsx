import React, { useState } from "react";
import { AiFillLock, AiOutlineMail } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import {signInWithPopup, signOut} from 'firebase/auth';
import {auth, provider} from '../firebase';
import { useAuthState} from 'react-firebase-hooks/auth'

const Signin = () => {
  const [user, loading] = useAuthState(auth);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { signIn } = UserAuth();

  const googleProvider = (e) => {
    signInWithPopup(auth, provider)
    .then((result) =>{
      console.log(result);
    
    }).catch((error) =>{
      console.log(error.message);
    });
  };


  const logOut = () =>{
    signOut(auth).then(() => {
      console.log("You logged out");
    
    }).catch((error) =>{
      console(error.message);
    })
  }


  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signIn(email, password);
      navigate("/home");
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  };

  return (
    <div>
      <div className="max-w-[400px] mx-auto min-h-[600px] px-4 py-20">
        <h1 className="text-2xl font-bold">Sign In</h1>
        <form onSubmit={handleSubmit}>
          <div className="my-4">
            <label>Email</label>
            <div className="my-2 w-full relative rounded-2xl shadow-xl">
              <input
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 bg-primary border border-input rounded-2xl"
                type="email"
              />
              <AiOutlineMail className="absolute right-2 top-3 text-gray-400" />
            </div>
          </div>
          <div className="my-4">
            <label>Password</label>
            <div className="my-2 w-full relative rounded-2xl shadow-xl">
              <input
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 bg-primary border border-input rounded-2xl"
                type="password"
              />
              <AiFillLock className="absolute right-2 top-3 text-gray-400" />
            </div>
          </div>
          <button className="w-full my-2 p-3 bg-button text-btnText rounded-2xl shadow-xl">
            Sign in
          </button>
        </form>
        <p className="my-4">
          Don't have an account?{" "}
          <Link to="/signup" className="text-accent">
            Sign up
          </Link>
        </p>
        <div className="flex justify-center">
          {!user ? (
            <a
              onClick={googleProvider}
              className="p-2 block font-medium text-gray-900 hover:cursor-pointer"
            >
              Sign in with Google
            </a>
          ) : (
           null
          )}
        </div>
      </div>
    </div>
  );
};

export default Signin;
