import React from "react";
import { UserAuth } from "../context/AuthContext";
import { Navigate, useNavigate } from "react-router-dom";

const Account = () => {
  const { user, logout } = UserAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await logout();
      navigate("/");
    } catch (e) {
      console.log(e.message);
    }
  };

  if (user) {
    return (
      <div className="max-w-[1140px] mx-auto">
        <div className="flex justify-between items-center my-12 py-8 rounded-div">
          <div>
            <h1 className="text-2xl font-bold">Account</h1>
            <div>
              <p>Welcome, {user?.email}</p>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center my-12 py-8 rounded-div">
          <div className="w-full min-h-[300px]">
            <h1 className="text-2xl font-bold py-4">Reviews</h1>
            <div className="flex justify-center">
              <form>
                <textarea className="min-h-[300px] min-w-[600px] max-w-[700px] bg-slate-600 border border-indigo-600 rounded-md shadow-sm py-2 px-4 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:border-white focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-indigo-600 resize">

                </textarea>
                <div className="flex flex-row max-w-[120px] px-2 py-4 mx-auto justify-between sm:flex-row text-center relative right-8">
                  <div className="">
                    <button>Create</button>
                  </div>
                  <div className="pl-5 pr-5">
                    <button>Update</button>
                  </div>
                  <div>
                    <button>Delete</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <Navigate to="/signin" />;
  }
};

export default Account;
