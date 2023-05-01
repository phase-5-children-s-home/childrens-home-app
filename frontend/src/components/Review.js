import React, { useState, useEffect } from 'react';
import './Review.css';

const ReviewForm = ({ addReview }) => {
  const [review, setReview] = useState('');
  const [rating, setRating] = useState(0);
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch('https://childrens-home-backend.onrender.com/reviews')
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
        setReviews(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  const handleReviewChange = (event) => {
    setReview(event.target.value);
  };

  const handleRatingChange = (event) => {
    setRating(parseInt(event.target.value));
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newReview = {
      review,
      rating,
      name,
      date,
    };
    fetch('https://childrens-home-backend.onrender.com/reviews/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newReview),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
        addReview(data);
        setReviews([...reviews, data]);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div>
      <h2>Reviews ({reviews.length})</h2>
      <form onSubmit={handleSubmit}>
        <label className='label-text'>
          Your Name:
          <input type='text' value={name} onChange={handleNameChange} />
        </label>

        <label className='label-text'>
          Rating:
          <select value={rating} onChange={handleRatingChange}>
            <option value={0}>Select a rating</option>
            <option value={1}>1 stars</option>
            <option value={2}>2 stars</option>
            <option value={3}>3 stars</option>
            <option value={4}>4 stars</option>
            <option value={5}>5 stars</option>
          </select>
        </label>
        <label className='label-text'>
          Review:
          <textarea value={review} onChange={handleReviewChange} />
        </label>
        <button type='submit'>Submit</button>
      </form>

      <div className='reviews'>
        {reviews.map((review) => (
          <div key={review.id} className='review'>
            <div className='review-header'>
              <h3>{review.name}</h3>
              <span>{review.date}</span>
            </div>
            <div className='review-body'>
              <p>{review.comment}</p>
              <p>Rating: {review.rating}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewForm;
