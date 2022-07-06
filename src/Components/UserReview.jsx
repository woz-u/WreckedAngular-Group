import React, { useState, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import { doc, onSnapshot, updateDoc } from "firebase/firestore";
import { db } from "../firebase";
import { UserAuth } from "../context/AuthContext";


const UserReview = () => {
  const [reviews, setCoins] = useState([]);
  const {user} = UserAuth();

  useEffect(() => {
    onSnapshot(doc(db, 'users', `${user?.email}`),(doc)=>{
      setCoins(doc.data()?.watchList)
    })
  },[user?.email])

  const reviewPath = doc(db, 'users', `${user?.email}`)
  const deleteReview = async (passedid) => {
    try{
      const result = reviews.filter((item) => item.id !== passedid)
      await updateDoc(reviewPath, {
        watchList: result
      })
    } catch(e) {
      console.log(e.message)
    }
  }

  return (
    <div>
      {reviews?.length === 0 ? (
        <p>
          You don't have any reviews saved. Please save a review to add it to your
          watch list. <Link to="/">Click here to search reviews.</Link>
        </p>
      ) : (
        <table className="w-full border-collapse text-center">
          <thead>
            <tr className="border-b">
              <th className="px-4">Rank #</th>
              <th className="text-left">Coin</th>
              <th className="text-left">Remove</th>
            </tr>
          </thead>
          <tbody>
            {reviews?.map((review) => (
              <tr key={review.id} className="h-[60px] overflow-hidden">
                <td>{review?.rank}</td>
                <td>
                  <Link to={`/review/${review.id}`}>
                    <div className="flex items-center">
                      <div>
                        <p className="hidden sm:table-cell">{review?.name}</p>
                      </div>
                    </div>
                  </Link>
                </td>
                <td className="pl-8">
                  <AiOutlineClose onClick={() => deleteReview(review.id)} className="cursor-pointer" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default UserReview;
