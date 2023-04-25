// HomeDeleteButton.js

import { useState } from 'react';
import PropTypes from 'prop-types';

function HomeDeleteButton({ id, onDelete }) {
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = () => {
    setIsDeleting(true);

    fetch(`https://childrens-home-backend.onrender.com/home_details${id}`, {
      method: 'DELETE'
    })
      .then(() => onDelete())
      .catch(err => {
        console.log(err);
        setIsDeleting(false);
      });
  };

  return (
    <button onClick={handleDelete} disabled={isDeleting}>
      {isDeleting ? 'Deleting...' : 'Delete'}
    </button>
  );
}

HomeDeleteButton.propTypes = {
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired
};

export default HomeDeleteButton;
