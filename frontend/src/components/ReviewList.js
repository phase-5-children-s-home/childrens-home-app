import React, { useState, useEffect } from 'react';
import './Review.css';

const ReviewList = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch('https://childrens-home-backend.onrender.com/reviews')
      .then((response) => response.json())
      .then((data) => setReviews(data))
      .catch((error) => console.log(error));
  }, []);

  const totalReviews = reviews.length;

  return (
    <div className="review-list-container">
      <h2>Reviews</h2>
      <p>Total Reviews: {totalReviews}</p>
    </div>
  );
};

export default ReviewList;
