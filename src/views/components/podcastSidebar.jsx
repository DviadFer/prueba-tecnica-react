import { useNavigate } from 'react-router-dom';

const PodcastSidebar = ({ podcast }) => {
  const navigate = useNavigate();

  return (
    <aside style={{ width: '30%', padding: '20px' }}>
      <img src={podcast.artworkUrl600} alt={`Portada de ${podcast.collectionName}`} style={{ width: '100%' }} />
      <h2>{podcast.collectionName}</h2>
      <p>{podcast.artistName}</p>
      <p>{podcast.description}</p>
      <button onClick={() => navigate('/')}>Back</button>
    </aside>
  );
};

export default PodcastSidebar;
