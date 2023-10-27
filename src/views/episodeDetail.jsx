import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PodcastSidebar from './components/podcastSidebar';
import EpisodeInfoCard from './components/episodeInfoCard';

const EpisodeDetail = ({ setLoading }) => {
    const { podcastId, episodeId } = useParams();
    const [episode, setEpisode] = useState(null);
    const [podcast, setPodcast] = useState(null);

    useEffect(() => {
        setLoading(true);
        const cachedPodcastData = localStorage.getItem(`podcast_${podcastId}`);
        if (cachedPodcastData) {
            const { data } = JSON.parse(cachedPodcastData);
            setPodcast(data);
            const foundEpisode = data.episodes.find(ep => ep.trackId === Number(episodeId));
            if (foundEpisode) {
                setEpisode(foundEpisode);
            }
        }
        setLoading(false);
    }, [podcastId, episodeId, setLoading]);

    if (!episode) {
        return <div>Cargando detalles del episodio...</div>;
    }

    return (
        <section className="episode-detail-view">
            <PodcastSidebar podcast={podcast} />
            <EpisodeInfoCard episode={episode} />
        </section>
    );
};

export default EpisodeDetail;
