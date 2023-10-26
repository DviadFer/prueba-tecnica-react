import React, { useState, useEffect } from 'react';
import { fetchTopPodcasts } from '../services/api';
import { Link } from 'react-router-dom';

function Home() {
    const [podcasts, setPodcasts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState('');

    useEffect(() => {
        fetchTopPodcasts()
            .then(podcastData => {
                setPodcasts(podcastData);
                setLoading(false);
            })
            .catch(error => {
                console.error("Error fetching podcasts:", error);
                setLoading(false);
            });
    }, []);

    const filteredPodcasts = podcasts.filter((podcast) => {
        const searchLower = search.toLowerCase();
        return searchLower === '' 
            ? true 
            : podcast["im:name"].label.toLowerCase().includes(searchLower) || 
              podcast["im:artist"].label.toLowerCase().includes(searchLower);
    });

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>{filteredPodcasts.length} Resultados</h1>
            <form>
                <input 
                    type="text"
                    value={search}
                    onChange={(event) => setSearch(event.target.value)} 
                    placeholder='Buscar podcast...'
                />
            </form>
            <ul>
                {filteredPodcasts.map(podcast => (
                    <li key={podcast.id.attributes["im:id"]}>
                        <Link to={`/podcast/${podcast.id.attributes["im:id"]}`}>
                            <img 
                                src={podcast["im:image"][2].label} // imagen de 170x170
                                alt={`Portada de ${podcast["im:name"].label}`}
                            />
                            <h2>{podcast["im:name"].label}</h2>
                            <p>por {podcast["im:artist"].label}</p>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Home;
