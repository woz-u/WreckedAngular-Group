// reading from database
import { async } from "@firebase/util";
import { addDoc, collection, deleteDoc, getDocs } from "firebase/firestore";
import { useState } from "react";
import { useEffect } from "react";
import { db } from "./src/firebase";
import { updateDoc } from "firebase/firestore";

// state to hold the info
const [newReview, setNewReview] = useState("");
// new state to create new reviews
const [reviews, setReviews] = useState([]);
const usersCollectionRef = collection(db, "users");
// querry from database connecting to user DB

useEffect(() => {
  const getReviews = async () => {
    const data = await getDocs(usersCollectionRef);
    setReviews(data.docs.map((doc) => ({ ...doc.data() })));
  };

  getReviews();
}, []);

// Mapping through users array

{
  users.map((user) => {
    return (
      <div>
        <h1> Review test: {user.reviews}</h1>
        {/* Should post the review the user posted? */}
      </div>
    );
  });
}

//  Adding data to firebase
{
<input placeholder="Leave a review!" onChange={(event) => {setNewReview(event.target.value)}}> Review</input>

<button onClick={createReview}>
    Create Review
</button> 
}

//create function thats called when clicked

const createReview = async (id) => {
  await addDoc(usersCollectionRef, { user.reviews: newReview });
};

// Update
const updateReview = async (id, reviews) => {
  const userDoc = doc(db, "users", reviews);
  const updatedReview = { reviews };
  // Ref single document
  await updateDoc(userDoc, updateReview);
};
<button
  onClick={() => {
    updateReview(user.id)
  }}
>
  Change review
</button>;

const deleteReview = async (id) => {
  const userDoc = doc(db, "users", reviews);
  await deleteDoc(userDoc);
};

<button
  onClick={() => {
    deleteReview(user.id);
  }}
>
  Delete review
</button>;


{products.map((id) => (
  <div key={id === 1}>
    <button className="bg-blue-600 text-white hover:opacity-75 p-2 rounded-3xl" onClick={() => addItem(id)}>Add to cart</button>
  </div>
))}