import { useNavigate } from 'react-router-dom';

const PodcastSidebar = ({ podcast }) => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(`/podcast/${podcast.collectionId}`);
  };

  return (
    <aside className='podcast-sidebar'>
      <img 
        src={podcast.artworkUrl600} 
        alt={`Portada de ${podcast.collectionName}`} 
        style={{ width: '100%', cursor: 'pointer' }} 
        onClick={handleBack}
      />
      <h2 onClick={handleBack} style={{ cursor: 'pointer' }}>
        {podcast.collectionName}
      </h2>
      <p>{podcast.artistName}</p>
      <p>{podcast.description}</p>
    </aside>
  );
};

export default PodcastSidebar;
