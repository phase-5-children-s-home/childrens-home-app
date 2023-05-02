import React, { useState } from 'react';

const ChildrensHomeForm = ({ addHome }) => {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [donationsNeeded, setDonationsNeeded] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
  
    // Create a new home object from form input values
    const newHome = {
      name: name,
      description: description,
      location: location,
      capacity: parseInt(capacity),
      donations_needed: donationsNeeded,
      image: image,
    };
  
    // Send POST request to backend API to create new home
    fetch('https://childrens-home-backend.onrender.com/home_details', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newHome),
    })
      .then((response) => response.json())
      .then((data) => {
        // Call addHome function passed as a prop to update state
        addHome(data);
        // Reset form input values to defaults
        setName('');
        setDescription('');
        setLocation('');
        setCapacity(1);
        setDonationsNeeded(false);
        setImage('');
      })
      .catch((error) => console.log(error));
  };
  

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add New Children's Home</h3>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <div>
        <label htmlFor="location">Location:</label>
        <input type="text" id="location" name="location" value={location} onChange={(e) => setLocation(e.target.value)} required />
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <textarea id="description" name="description" value={description} onChange={(e) => setDescription(e.target.value)} required />
      </div>
      <div>
        <label htmlFor="donationsNeeded">Donations Needed:</label>
        <input type="checkbox" id="donationsNeeded" name="donationsNeeded" checked={donationsNeeded} onChange={(e) => setDonationsNeeded(e.target.checked)} />
      </div>
      <button type="submit">Add Home</button>
    </form>
  );
};

export default ChildrensHomeForm;
