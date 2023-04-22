import React, { useState } from 'react';

function ChildrensHomeReview() {
  const [name, setName] = useState('');
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');
  const [reviews, setReviews] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newReview = {
      name: name,
      rating: rating,
      review: review
    }
    setReviews([...reviews, newReview]);
    setName('');
    setRating(0);
    setReview('');
  }

  return (
    <div>
      <h1>Reviews</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <br />
        <label>
          Rating:
          <input type="number" min="0" max="5" value={rating} onChange={(e) => setRating(parseInt(e.target.value))} />
        </label>
        <br />
        <label>
          Review:
          <textarea value={review} onChange={(e) => setReview(e.target.value)} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      {reviews.map((review, index) => (
        <div key={index}>
          <h3>{review.name}</h3>
          <p>Rating: {review.rating}</p>
          <p>{review.review}</p>
        </div>
      ))}
    </div>
  );
}

export default ChildrensHomeReview;
