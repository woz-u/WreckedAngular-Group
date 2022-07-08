// import React, { useState } from "react";
// export default function Todo({
//   todo,
//   handleDelete,
//   handleEdit,
// }) {
//   const [newReview, setNewReview] = useState(reviews.id);

//   const handleChange = (e) => {
//     e.preventDefault();
//     if (todo.complete === true) {
//       setNewReview(review.id);
//     } else {
//       review.id = "";
//       setNewReview(e.target.value);
//     }
//   };
//   return (
//     <div className="todo">
//       <div>
//         <button
//           className="button-edit"
//           onClick={() => handleEdit(review, newReview)}
//         >
//           <HiPencil id="i" />
//         </button>
//         <button
//           className="button-delete"
//           onClick={() => handleDelete(review.id)}
//         >
//           <HiOutlineX id="i" />
//         </button>
//       </div>
//     </div>
//   );
// }
