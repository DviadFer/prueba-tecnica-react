import { Link } from 'react-router-dom';

const PodcastList = ({ podcasts }) => (
    <ul className="podcasts-list">
        {podcasts.map(podcast => (
            <Link to={`/podcast/${podcast.id.attributes["im:id"]}`}>
                <li key={podcast.id.attributes["im:id"]}>
                    <img 
                        src={podcast["im:image"][2].label} 
                        alt={`Portada de ${podcast["im:name"].label}`}
                    />
                    <div className="text-tag">
                        <h2>{podcast["im:name"].label}</h2>
                        <p>por {podcast["im:artist"].label}</p>
                    </div>
                </li>
            </Link>
        ))}
    </ul>
);

export default PodcastList;
