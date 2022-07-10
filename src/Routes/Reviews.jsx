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
import { updateDoc } from "firebase/firestore";

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
  const reviewsCollectionRef = collection(db, "reviews");
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const getReviews = async () => {
      const data = await getDocs(reviewsCollectionRef);
      setReviews(data.docs.map((doc) => ({ ...doc.data() })));
    };

    getReviews();
  }, []);


  const reviewsPath = doc(db, 'reviews', `${reviews.review}`)
  const deleteReview = async (passedid) => {
    try {
      const result = reviews.filter((review) => review.id !== passedid);
      await updateDoc(reviewsPath, {
        reviews: result
      });
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <div className="bg-slate-800 pb-40">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-4xl font-medium text-white pl-6">Recent reviews</h2>
        <div className="mt-6 border-t border-b border-indigo-600 divide-y divide-indigo-600">
          {reviews.map((reviews) => {
            return (
              <div className="text-slate-200 border-indigo-600">
                <h1 className="m-7"> Review Test : {reviews.review}</h1>
                <button onClick={() => deleteReview(reviews.review)} >Delete Review</button> 
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
