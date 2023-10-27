import { fetchTopPodcasts, fetchPodcastDetails } from './api';

//Funciones para comprobar el tiempo transcurrido desde el ultimo fetch de podcasts y guardar la info. en local storage.
const fetchData = async (setPodcasts, setLoading) => {
  const now = new Date().getTime();
  const cachedData = localStorage.getItem('podcastsData');
  let isDataFresh = false;

  if (cachedData) {
    const { lastFetchTime, podcasts } = JSON.parse(cachedData);
    if ((now - lastFetchTime) < 86400000) {  // 24 horas en milisegundos
      setPodcasts(podcasts);
      setLoading(false);
      isDataFresh = true;
    }
  }

  if (!isDataFresh) {
    try {
      const podcastData = await fetchTopPodcasts();
      const dataToStore = {
        lastFetchTime: now,
        podcasts: podcastData
      };
      localStorage.setItem('podcastsData', JSON.stringify(dataToStore));
      setPodcasts(podcastData);
    } catch (error) {
      console.error("Error fetching podcasts:", error);
    }
    setLoading(false);
}
};

const fetchPodcastData = async (podcastId) => {
  const now = new Date().getTime();
  const cachedPodcastData = localStorage.getItem(`podcast_${podcastId}`);

  if (cachedPodcastData) {
    const { lastFetch, data } = JSON.parse(cachedPodcastData);
    if (now - lastFetch < 24 * 60 * 60 * 1000) {
      return data; // Datos frescos, retornar desde el cache
    }
  }

  // Datos no encontrados o caducados, solicitar nuevos datos
  const { details, episodes } = await fetchPodcastDetails(podcastId);
  const newData = {
    ...details,
    episodes: episodes
  };
  localStorage.setItem(`podcast_${podcastId}`, JSON.stringify({ lastFetch: now, data: newData }));

  return newData;
};

export { fetchPodcastData, fetchData };
