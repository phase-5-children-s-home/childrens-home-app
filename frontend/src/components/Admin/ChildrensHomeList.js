import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ChildrensHomeList = () => {
  const [homes, setHomes] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedHome, setSelectedHome] = useState(null);

  useEffect(() => {
    fetch('https://childrens-home-backend.onrender.com/home_details')
      .then(response => response.json())
      .then(data => setHomes(data))
      .catch(error => console.log(error));
  }, []);

  const handleDelete = (home) => {
    setSelectedHome(home);
    setShowModal(true);
  }

  const handleConfirmDelete = () => {
    if (selectedHome) {
    fetch(`https://childrens-home-backend.onrender.com/home_details/${selectedHome.id}`, { method: 'DELETE' })
      .then(response => response.json())
      .then(data => {
        setHomes(homes.filter(home => home.id !== selectedHome.id));
        setSelectedHome(null);
        setShowModal(false);
      })
      .catch(error => console.log(error));
    }
  }

  return (
    <div>
      <h2>Children's Homes List</h2>
      <ul>
        {homes.map(home => (
          <li key={home.id}>
            <Link to={`/homes/${home.id}`}>{home.name}</Link>
            <button onClick={() => handleDelete(home)}>Delete</button>
          </li>
        ))}
      </ul>
      {showModal && (
        <div>
          <p>Are you sure you want to delete {selectedHome.name}?</p>
          <button onClick={handleConfirmDelete}>Yes</button>
          <button onClick={() => setShowModal(false)}>No</button>
        </div>
      )}
    </div>
  );
};

export default ChildrensHomeList;
