import React, { useState, useEffect } from "react";
import { Card, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Homelist.css";
import ReviewList from "./ReviewList";

const HomeList = () => {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  console.log(data)
  useEffect(() => {
    fetch("https://childrens-home-backend.onrender.com/home_details")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.log(error));
  }, []);


  useEffect(() => {
    fetch("https://childrens-home-backend.onrender.com/reviews")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.log(error));
  }, []);


  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredData = data.filter((item) =>
    item?.location?.toLowerCase().includes(searchQuery?.toLowerCase())
    ||
    // Or by the item name
    item?.name?.toLowerCase().includes(searchQuery?.toLowerCase())
  );

  return (
    <div className="home-list-container">
      <div className="search-form">
        <Form>
          <Form.Group controlId="formSearch">
            <Form.Label className="search-label">Search by city or name of homes:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter city or name"
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
        <Card.Title>{item.name}</Card.Title>
      </div>
      {showDetails && (
        <Card.Body>
          <Card.Text>
            <p>Description: {item.description}</p>
            <p>Location: {item.location}</p>
            <p>Address: {item.address}</p>
            <p>Email: {item.email}</p>
            <p>Phone: {item.phone_number}</p>
          </Card.Text>
          <Link to="/donation">
            <Button variant="primary">Donate</Button>
          </Link>
          <Link to="/bookvisit">
            <Button id="book_vist" variant="success" className="ml-2">Book Visit</Button>
          </Link>
          <Link to="/review">
            <Button id="review"  variant="info" className="ml-2">Review</Button>
          </Link>
          <ReviewList homeId={item.reviews}/>
        </Card.Body>
      )}
    </Card>
  );
};

export default HomeList;
