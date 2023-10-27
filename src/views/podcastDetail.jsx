import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PodcastSidebar from './components/podcastSidebar';
import EpisodeList from './components/episodeList';
import { fetchPodcastData } from '../services/setDataToLocal';

function PodcastDetail({ setLoading }) {
  const { podcastId } = useParams();
  const [podcast, setPodcast] = useState(null);

  useEffect(() => {
    setLoading(true)
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
  }, [podcastId, setLoading]);

  if (!podcast) {
    return <div>Cargando detalles del podcast...</div>;
  }

  return (
    <section className='podcast-detail-view'>
      <PodcastSidebar podcast={podcast} />
      <EpisodeList episodes={podcast.episodes} podcastId={podcastId} />
    </section>
  );
}

export default PodcastDetail;
