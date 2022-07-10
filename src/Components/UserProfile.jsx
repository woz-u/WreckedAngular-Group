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
    <div>
      <div className="text-white flex justify-center ">
        <p>Display name: {user.displayName} </p>
      </div>
      <div className="mt-2 mb-4 flex justify-center">
        <input
          id="displayName"
          ref={nameRef}
          name="displayName"
          className="bg-slate-300 border-indigo-600 rounded-md shadow-sm py-2 px-4 text-base placeholder-black focus:outline-none focus:border-white focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-indigo-600 resize text-black"
        />
      </div>
        <div className="flex justify-center">
          <button onClick={updateName} className=" bg-blue-600 text-white hover:opacity-75 p-2 rounded-3xl mt-4 ">
          Update
          </button>
        </div>
      
    </div>
  );
};

export default UserProfileInfo;
