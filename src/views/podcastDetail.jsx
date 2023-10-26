import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PodcastSidebar from './components/podcastSidebar';
import EpisodeList from './components/episodeList';
import { fetchPodcastData } from '../services/setDataToLocal';

function PodcastDetail() {
  const { podcastId } = useParams();
  const [podcast, setPodcast] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchPodcastData(podcastId);
        setPodcast(data);
      } catch (error) {
        console.error('Error fetching podcast data:', error);
      }
      setLoading(false);
    };

    fetchData();
  }, [podcastId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!podcast) {
    return <div>Podcast no encontrado</div>;
  }

  return (
    <div style={{ display: 'flex' }}>
      <PodcastSidebar podcast={podcast} />
      <EpisodeList episodes={podcast.episodes} podcastId={podcastId} />
    </div>
  );
}

export default PodcastDetail;
