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
      <div className="bg-slate-800">
        <div className="items-center py-8 rounded-div">
          <div>
            <h1 className="text-3xl font-bold text-white text-center">
              Account
            </h1><br></br>
            <div>
              <p className="text-white text-center text-2xl">
                Welcome, {user?.email}
              </p><br></br>
              <div className="flex justify-center">
                <Delete />
              </div>
            </div>
          </div>
        </div>
        <UserProfileInfo />
        <div className="flex justify-between items-center py-4 rounded-div">
          <div className="w-full min-h-[300px]">
            <h1 className="text-3xl font-bold py-8 text-center text-white">
              Reviews
            </h1>
            <div className="flex justify-center">
              <UserReview />
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
