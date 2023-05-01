import React, { useState, useEffect } from 'react';

const Analytics = () => {
  const [visitsData, setVisitsData] = useState([]);
  const [reviewsData, setReviewsData] = useState([]);
  const [homesData, setHomesData] = useState([]);
  const [usersData, setUsersData] = useState([]);

  useEffect(() => {
    fetch('/api/visits')
      .then(response => response.json())
      .then(data => setVisitsData(data))
      .catch(error => console.log(error));

    fetch('/api/reviews')
      .then(response => response.json())
      .then(data => setReviewsData(data))
      .catch(error => console.log(error));

    fetch('/api/homes')
      .then(response => response.json())
      .then(data => setHomesData(data))
      .catch(error => console.log(error));

    fetch('/api/users')
      .then(response => response.json())
      .then(data => setUsersData(data))
      .catch(error => console.log(error));
  }, []);

  const mostVisitedHome = visitsData.reduce((acc, visit) => {
    if (!acc[visit.home_id]) {
      acc[visit.home_id] = 0;
    }
    acc[visit.home_id]++;
    return acc;
  }, {});

  const sortedMostVisitedHome = Object.entries(mostVisitedHome).sort((a, b) => b[1] - a[1]);

  const mostReviewedHome = reviewsData.reduce((acc, review) => {
    if (!acc[review.home_id]) {
      acc[review.home_id] = 0;
    }
    acc[review.home_id]++;
    return acc;
  }, {});

  const sortedMostReviewedHome = Object.entries(mostReviewedHome).sort((a, b) => b[1] - a[1]);

  const homesInNeedOfDonations = homesData.filter(home => home.donations_needed);

  return (
    <div>
      <h2>Analytics</h2>
      <p>Number of visits: {visitsData.length}</p>
      <p>Number of reviews: {reviewsData.length}</p>
      <p>Number of homes: {homesData.length}</p>
      <p>Number of users: {usersData.length}</p>
      <h3>Most visited homes:</h3>
      <ul>
        {sortedMostVisitedHome.map(([homeId, count]) => (
          <li key={homeId}>Home ID: {homeId} - Number of visits: {count}</li>
        ))}
      </ul>
      <h3>Most reviewed homes:</h3>
      <ul>
        {sortedMostReviewedHome.map(([homeId, count]) => (
          <li key={homeId}>Home ID: {homeId} - Number of reviews: {count}</li>
        ))}
      </ul>
      <h3>Homes in need of donations:</h3>
      <ul>
        {homesInNeedOfDonations.map(home => (
          <li key={home.id}>{home.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Analytics;
