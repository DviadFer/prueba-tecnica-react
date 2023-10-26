import { Link } from 'react-router-dom';

const PodcastList = ({ podcasts }) => (
    <ul>
        {podcasts.map(podcast => (
            <li key={podcast.id.attributes["im:id"]}>
                <Link to={`/podcast/${podcast.id.attributes["im:id"]}`}>
                    <img 
                        src={podcast["im:image"][2].label} 
                        alt={`Portada de ${podcast["im:name"].label}`}
                    />
                    <h2>{podcast["im:name"].label}</h2>
                    <p>por {podcast["im:artist"].label}</p>
                </Link>
            </li>
        ))}
    </ul>
);

export default PodcastList;
