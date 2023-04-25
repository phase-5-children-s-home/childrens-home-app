import { useState, useEffect, useHistory} from 'react';
import { useParams } from 'react-router-dom';


function HomeForm() {
  const { id } = useParams();
  const history = useHistory();
  const [name, setName] = useState('');
  const [image_url, setImageUrl] = useState('');
  const [city, setCity] = useState('');

  useEffect(() => {
    if (id) {
      fetch(`https://childrens-home-backend.onrender.com/home_details${id}`)
        .then(res => res.json())
        .then(data => {
          setName(data.name);
          setImageUrl(data.image_url);
          setCity(data.location);
        })
        .catch(err => console.log(err));
    }
  }, [id]);

  const handleSubmit = event => {
    event.preventDefault();

    const method = id ? 'PUT' : 'POST';
    const url = id ? `https://childrens-home-backend.onrender.com/home_details${id}` : 'https://childrens-home-backend.onrender.com/home_details';

    fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, image_url, city })
    })
      .then(() => history.push('/homes'))
      .catch(err => console.log(err));
  };

  const handleDelete = () => {
    const url = `https://childrens-home-backend.onrender.com/home_details${id}`;

    fetch(url, {
      method: 'DELETE'
    })
      .then(() => history.push('/homes'))
      .catch(err => console.log(err));
  };

  return (
    <>
      <h1>{id ? 'Edit Home' : 'Add Home'}</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={event => setName(event.target.value)} />
        </div>
        <div>
          <label>Image URL:</label>
          <input type="text" value={image_url} onChange={event => setImageUrl(event.target.value)} />
        </div>
        <div>
          <label>City:</label>
          <input type="text" value={city} onChange={event => setCity(event.target.value)} />
        </div>
        <button type="submit">{id ? 'Save Changes' : 'Add Home'}</button>
      </form>
      {id && (
        <div>
          <h2>Delete Home</h2>
          <p>Are you sure you want to delete this home?</p>
          <button onClick={handleDelete}>Delete</button>
        </div>
      )}
    </>
  );
}

export default HomeForm;
