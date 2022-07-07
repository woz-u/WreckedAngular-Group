import React from "react";
import { UserAuth } from "../context/AuthContext";
import { Navigate, useNavigate } from "react-router-dom";
import UserReview from "../Components/UserReview";

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
      <div className="bg-slate-800">
        <div className="items-center py-8 rounded-div">
          <div>
            <h1 className="text-3xl font-bold text-white text-center">
              Account
            </h1>
            <div>
              <p className="text-white text-center text-2xl">
                Welcome, {user?.email}
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center py-8 rounded-div">
          <div className="w-full min-h-[300px]">
            <h1 className="text-3xl font-bold py-8 text-center text-white">
              Reviews
            </h1>
            <div>
              <UserReview />
            </div>
            <div className="flex justify-center">
              <form>
                <textarea
                  className="min-h-[300px] min-w-[600px] max-w-[700px] bg-slate-300 
                border-indigo-600 rounded-md shadow-sm py-2 px-4 text-base placeholder-black 
                focus:outline-none focus:border-white focus:ring-2 focus:ring-offset-2 
                focus:ring-offset-gray-900 focus:ring-indigo-600 resize text-black"
                  placeholder="Please Write Us A Review">
                    
                  </textarea>

                <div className="flex flex-row max-w-[120px] px-2 py-4 mx-auto justify-between sm:flex-row text-center relative right-16">
                  <div className="">
                    <button className="bg-blue-600 text-white hover:opacity-75 p-2 rounded-3xl">
                      Create
                    </button>
                  </div>
                  <div className="pl-5 pr-5">
                    <button className="bg-blue-600 text-white hover:opacity-75 p-2 rounded-3xl">
                      Update
                    </button>
                  </div>
                  <div>
                    <button className="bg-blue-600 text-white hover:opacity-75 p-2 rounded-3xl">
                      Delete
                    </button>
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
