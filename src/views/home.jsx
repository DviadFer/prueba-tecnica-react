import React, { useState, useEffect } from 'react';
import SearchBar from './components/searchBar';
import PodcastList from './components/PodcastList';
import fetchData from '../services/setDataToLocal';

function Home() {
    const [podcasts, setPodcasts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState('');

    useEffect(() => {
        fetchData(setPodcasts, setLoading);
    }, []);

    const searchLower = search.toLowerCase();
    const filteredPodcasts = podcasts.filter(podcast =>
        searchLower === '' || 
        podcast["im:name"].label.toLowerCase().includes(searchLower) ||
        podcast["im:artist"].label.toLowerCase().includes(searchLower)
    );

    if (loading) return <div>Loading...</div>;

    return (
        <div>
            <SearchBar setSearch={setSearch} resultCount={filteredPodcasts.length} />
            <PodcastList podcasts={filteredPodcasts} />
        </div>
    );
}

export default Home;
