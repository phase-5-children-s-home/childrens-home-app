import React, { useState, useEffect } from "react";
import { Card, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Homelist.css";

const HomeList = () => {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetch("https://api.npoint.io/f2cf33f815ca0db59113/")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.log(error));
  }, []);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredData = data.filter((item) =>
    item.city.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
          <CardItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const CardItem = ({ item }) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  const cardStyle = {
    height: showDetails ? "auto" : "fit-content",
  };

  return (
    <Card className="card" style={cardStyle}>
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
          <Link to="/donation">
            <Button variant="primary">Donate</Button>
          </Link>
          <Link to="/book">
            <Button id="book_vist" variant="success" className="ml-2">Book Visit</Button>
          </Link>
          <Link to="/review">
            <Button id="review"  variant="info" className="ml-2">Review</Button>
          </Link>
        </Card.Body>
      )}
    </Card>
  );
};

export default HomeList;
