import { Link } from 'react-router-dom';

const EpisodeList = ({ episodes, podcastId }) => {

    const formatDuration = (millis) => {
        const hours = Math.floor(millis / (1000 * 60 * 60));
        const minutes = Math.floor((millis % (1000 * 60 * 60)) / (1000 * 60));
        return `${hours}h ${minutes}m`;
    };
        
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getFullYear()}`;
    };

  return (
    <div className='episode-list'>
      <h1>Episodios: {episodes.length}</h1>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Fecha</th>
            <th>Duración</th>
          </tr>
        </thead>
        <tbody>
          {episodes.map((episode, index) => (
            <tr key={index}>
              <td>
                <Link to={`/podcast/${podcastId}/episode/${episode.trackId}`}>
                  {episode.trackName}
                </Link>
              </td>
              <td>{formatDate(episode.releaseDate)}</td>
              <td>{formatDuration(episode.trackTimeMillis)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EpisodeList;
