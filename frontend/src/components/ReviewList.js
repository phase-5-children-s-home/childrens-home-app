import React, { useState, useEffect } from 'react';
import './Review.css';
import ReviewForm from './Review';

const ReviewList = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch('https://childrens-home-backend.onrender.com/reviews')
      .then((response) => response.json())
      .then((data) => setReviews(data))
      .catch((error) => console.log(error));
  }, []);

  const totalReviews = reviews.length;

  const addReview = (review) => {
    setReviews([...reviews, review]);
  };

  return (
    <div className="review-list-container">
      <h2>Reviews</h2>
      <p>Total Reviews: {totalReviews}</p>
      <ReviewForm addReview={addReview}/>
    </div>
  );
};

export default ReviewList;
