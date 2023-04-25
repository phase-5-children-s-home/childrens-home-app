import React, { useState } from 'react';
import './Review.css'

const ReviewForm = ({addReview}) => {
  const [review, setReview] = useState('');
  const [rating, setRating] = useState(0);
  const [name, setName] = useState('');
  const [date, setDate] = useState('');

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
    fetch('https://childrens-home-backend.onrender.com/reviews', {
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
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };
  

  return (
    <form onSubmit={handleSubmit}>
      <label className='label-text'>
        Your Name:
        <input  type="text" value={name} onChange={handleNameChange} />
      </label>

      <label className='label-text'>
        Rating:
        <select value={rating} onChange={handleRatingChange}>
          <option value={0}>Select a rating</option>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
      </label>
      <label className='label-text'>
        Review:
        <textarea value={review} onChange={handleReviewChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ReviewForm;