import { fetchTopPodcasts } from './api';

//Funcion para comprobar el tiempo transcurrido desde el ultimo fetch de podcasts y guardar la info. en local storage.
const fetchData = async (setPodcasts, setLoading) => {
    const lastFetchTime = localStorage.getItem('lastFetchTime');
    const now = new Date().getTime();

    if (lastFetchTime && (now - lastFetchTime) < 86400000) {
        const cachedPodcasts = localStorage.getItem('podcasts');
        if (cachedPodcasts) {
            setPodcasts(JSON.parse(cachedPodcasts));
            setLoading(false);
            return;
        }
    }

    try {
        const podcastData = await fetchTopPodcasts();
        localStorage.setItem('podcasts', JSON.stringify(podcastData));
        localStorage.setItem('lastFetchTime', now.toString());
        setPodcasts(podcastData);
    } catch (error) {
        console.error("Error fetching podcasts:", error);
    }
    setLoading(false);
};

export default fetchData;
