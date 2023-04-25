import React, { useState } from 'react';
import './Booksession.css'
​
const BookVisitForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
​
  const handleNameChange = (event) => {
    setName(event.target.value);
  };
​
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
​
  const handleDateChange = (event) => {
    setDate(event.target.value);
  };
​
  const handleTimeChange = (event) => {
    setTime(event.target.value);
  };
​
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({
      name,
      email,
      date,
      time,
    });
  };
​
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Your Name:
        <input type="text" value={name} onChange={handleNameChange} />
      </label>
      <label>
        Your Email:
        <input type="email" value={email} onChange={handleEmailChange} />
      </label>
      <label>
        Date of Visit:
        <input type="date" value={date} onChange={handleDateChange} />
      </label>
      <label>
        Time of Visit:
        <input type="time" value={time} onChange={handleTimeChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};
​
export default BookVisitForm;