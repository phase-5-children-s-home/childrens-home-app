// Navbar.js

import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import HomeList from './HomeList';
import HomeForm from './HomeForm';
import HomeDeleteButton from './HomeDeleteButton';
import './AdminNav.css'

function Navbar({ title }) {
  return (
    <nav>
      <h1>{title}</h1>
      <ul>
        <li>
          <Link to="/homes">List of Homes</Link>
        </li>
        <li>
          <Link to="/homes/add">Add Home</Link>
        </li>
      </ul>
      <HomeList />
      <HomeForm />
      <HomeDeleteButton />
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired
};

export default Navbar;
