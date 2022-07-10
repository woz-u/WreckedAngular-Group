import React from "react";
import { Navigate } from "react-router-dom";
import UserReview from "../Components/UserReview";
import { auth } from "../firebase";
import Delete from "../Components/Delete";
import UserProfileInfo from "../Components/UserProfile";

const Account = () => {
  const user = auth.currentUser;

  if (user) {
    return (
      <div className="bg-slate-800 pt-10">
        <div>
        <UserProfileInfo />
        </div>
          <div className="py-4 rounded-div ">
            <div className="w-full min-h-[300px]">
              <h1 className="text-3xl font-bold text-center mb-8 text-white">
              Reviews
              </h1>
                <div className="flex justify-center">
              <UserReview />
            </div>
          </div>
        </div>
        <div className="items-center py-6 rounded-div">
          <div>
            <h1 className="text-2xl font-bold text-white text-start ml-10 mb-4">
              Account
            </h1>
            <div>
              <p className="text-white ml-10 mb-5 text-lg text-start">
                {user?.email}
              </p>
              <div className="flex justify-start ml-10">
                <Delete />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <Navigate to="/home" />;
  }
};
export default Account;
