import React, { useState, useEffect } from 'react';
import SearchBar from './components/searchBar';
import PodcastList from './components/PodcastList';
import { fetchData } from '../services/setDataToLocal';

function Home({ setLoading }) {
    const [podcasts, setPodcasts] = useState([]);
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

    return (
        <section className='home-view'>
            <SearchBar setSearch={setSearch} resultCount={filteredPodcasts.length} />
            <PodcastList podcasts={filteredPodcasts} />
        </section>
    );
}

export default Home;
