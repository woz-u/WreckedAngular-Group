import React, { useRef } from "react";
import { updateProfile } from "firebase/auth";
import { auth } from "../firebase";

const UserProfileInfo = () => {
  const user = auth.currentUser;
  const nameRef = useRef(" ");
  const updateName = (e) => {
    e.preventDefault();
    updateProfile(user, {
      displayName: nameRef.current.value,
    })
      .then((userCredential) => {
        console.log(user.displayName);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className="text-start ml-10">
      <div className="text-white text-3xl mt-6 flex justify-start font-bold">
        <p>Welcome, {user.displayName} </p>
      </div>
      <div className="mt-4">
        <input
          id="displayName"
          ref={nameRef}
          name="displayName"
          placeholder="User Name"
          className="bg-slate-300 border-indigo-600 rounded-md shadow-sm py-2 px-4 text-base placeholder-black focus:outline-none focus:border-white focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-indigo-600 resize text-black"
        />
      </div>
        <div className="">
          <button onClick={updateName} className=" bg-blue-600 text-white hover:opacity-75 p-2 rounded-3xl mt-4 ">
          Update
          </button>
        </div>
      
    </div>
  );
};

export default UserProfileInfo;
