import { Link } from 'react-router-dom';
import HomeDeleteButton from './HomeDeleteButton';

function HomeItem({ home }) {
  return (
    <div>
      <img src={home.imageUrl} alt={home.name} />
      <h2>{home.name}</h2>
      <p>{home.city}</p>
      <Link to={`/homes/${home._id}`}>Edit</Link>
      <HomeDeleteButton homeId={home._id} />
    </div>
  );
}

export default HomeItem;