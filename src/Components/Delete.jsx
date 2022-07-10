import React from "react";
import { deleteUser } from "firebase/auth";
import { auth } from "../firebase";

const Delete = () => {
  const user = auth.currentUser;
  const deleteU = (e) => { 
    e.preventDefault();
    deleteUser(user)
      .then(() => {
        console.log("User deleted");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div>
      <button className="bg-blue-600 text-white hover:opacity-75 p-2 rounded-3xl mb-8" onClick={deleteU}>Delete Account</button>
    </div>
  );
};

export default Delete;
