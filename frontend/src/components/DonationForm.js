import React, { useState } from 'react';
import './DonationForm.css'; // import the CSS file

function DonationForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [amount, setAmount] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch('/api/donate', {
      method: 'POST',
      body: JSON.stringify({ name, email, amount, paymentMethod }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    console.log(data);
  };

  return (
  <div>
    <form onSubmit={handleSubmit} className="donation-form">
      <h2 className="donation-form__title">Donate Now</h2>
      <div className="donation-form__input-container">
        <label className="donation-form__label">
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="donation-form__input" />
        </label>
        <label className="donation-form__label">
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="donation-form__input" />
        </label>
      </div>
      <div className="donation-form__input-container">
        <label className="donation-form__label">
          Amount:
          <input type="number" value={amount} onChange={(e) => setAmount(parseInt(e.target.value))} className="donation-form__input" />
        </label>
        <label className="donation-form__label">
          Payment Method:
          <select value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)} className="donation-form__select">
            <option value="">Select a payment method</option>
            <option value="credit-card">Credit Card</option>
            <option value="paypal">PayPal</option>
            <option value="paypal">Mpesa</option>
          </select>
        </label>
      </div>
      <button type="submit" className="donation-form__button">Donate</button>
    </form>
  </div> 
  );
}

export default DonationForm;