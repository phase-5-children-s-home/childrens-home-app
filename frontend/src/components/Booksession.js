import React, { useState } from 'react';
import './Booksession.css'
import ModalPopup from './ModalPopup';

const BookVisitForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleTimeChange = (event) => {
    setTime(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({
      name,
      email,
      date,
      time,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Book <span>Visit</span> </h1>
      {/* <label>
        Your Name:
        <input type="text" value={name} onChange={handleNameChange} />
      </label> */}
      {/* <label>
        Childrens home name:
        <input type="text" value={name} onChange={handleNameChange} />
      </label> */}
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

      <ModalPopup />
    </form>
  );
};

export default BookVisitForm;