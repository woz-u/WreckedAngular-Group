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
      <div>
        <p>Display name: {user.displayName} </p>
      </div>
      <div className="mt-1 flex justify-center">
        <input
          id="displayName"
          ref={nameRef}
          name="displayName"
          className="text-black"
        />
      </div>
      <button
        onClick={updateName}
        className="w-full my-2 p-3 bg-button text-btnText bg-indigo-700 text-rounded-2xl shadow-xl text-white hover:bg-white hover:text-black"
      >
        Update
      </button>
    </div>
  );
};

export default UserProfileInfo;
