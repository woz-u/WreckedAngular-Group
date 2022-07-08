import React, { useEffect, useState } from "react";
import SavedReviews from "../Components/SavedReviews";
import { db } from "../firebase";
import {
  addDoc,
  collection,
  deleteDoc,
  getDocs,
  doc,
} from "firebase/firestore";

const reviews = [
  {
    id: 1,
    title: "Can't say enough good things",
    rating: 5,
    content: `
      <p>I was really pleased with the overall shopping experience. My order even included a little personal, handwritten note, which delighted me!</p>
      <p>The product quality is amazing, it looks and feel even better than I had anticipated. Brilliant stuff! I would gladly recommend this store to my friends. And, now that I think of it... I actually have, many times!</p>
    `,
    author: "Risako M",
    date: "May 16, 2021",
    datetime: "2021-01-06",
  },
  // More reviews...
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Reviews() {
  const usersCollectionRef = collection(db, "reviews");
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const getReviews = async () => {
      const data = await getDocs(usersCollectionRef);
      setReviews(data.docs.map((doc) => ({ ...doc.data() })));
    };

    getReviews();
  }, []);


  return (
    <div className="bg-slate-800 pb-40">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-4xl font-medium text-white text-center">
          Recent reviews
        </h2>
        <div className="mt-6 pb-10 border-t border-b border-indigo-600 divide-y divide-white space-y-10">
          {/* <SavedReviews/> */}
          {reviews.map((reviews) => {
            return (
              <div className="text-slate-400 ">
                <h1 className=""> Review Test : {reviews.review}</h1>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
