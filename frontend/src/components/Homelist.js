import React, { useState, useEffect } from 'react';
import { Card, Button, Form } from 'react-bootstrap';
import './Homelist.css'

const HomeList = () => {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetch('https://api.npoint.io/f2cf33f815ca0db59113/')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.log(error));
  }, []);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredData = data.filter((item) =>
    item.city.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  const cardStyle = {
    height: showDetails ? 'auto' : 'fit-content'
  };

  return (
    <div className="home-list-container">
      <div className="search-form">
        <Form>
          <Form.Group controlId="formSearch">
            <Form.Label>Search by city name:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter city name"
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </Form.Group>
        </Form>
      </div>

      <div className="card-section">
        {filteredData.map((item) => (
          <Card key={item.id} className="card" style={cardStyle}>
            <div onClick={toggleDetails}>
              <Card.Img variant="top" src={item.image_url} className="card-img-top" />
              <Card.Title>{item.childrens_home_name}</Card.Title>
            </div>
            {showDetails && (
              <Card.Body>
                <Card.Text>
                  <p>Description: {item.description}</p>
                  <p>City: {item.city}</p>
                  <p>Address: {item.address}</p>
                  <p>Email: {item.email}</p>
                  <p>Phone: {item.phone_number}</p>
                </Card.Text>
                <Button variant="primary">Donate</Button>
              </Card.Body>
            )}
          </Card>
        ))}
      </div>
    </div>
  );
};

export default HomeList;
