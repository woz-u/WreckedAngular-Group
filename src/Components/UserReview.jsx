import React, { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import {UserAuth} from '../context/AuthContext'

export default function AddTodo() {
  const [review, setReview] = useState("");
  const { user } = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (review !== "") {
      await addDoc(collection(db, "reviews"), {
        review,
      });
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <textarea
          className="min-h-[300px] min-w-[600px] max-w-[700px] bg-slate-300 border-indigo-600 rounded-md shadow-sm py-2 px-4 text-base placeholder-black focus:outline-none focus:border-white focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-indigo-600 resize text-black"
          placeholder="Please Write Us A Review"
          type="text"
          value={review}
          onChange={(e) => setReview(e.target.value)}
        />
      </div>
      <div className="flex justify-center">
        <button className="bg-blue-600 text-white hover:opacity-75 p-2 rounded-3xl mt-4">Create Review</button>
      </div>
    </form>
  );
}
