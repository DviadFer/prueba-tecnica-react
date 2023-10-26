const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";

export const fetchTopPodcasts = () => {
  return fetch(`${CORS_PROXY}https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json`)
    .then(response => response.json())
    .then(data => data.feed.entry);
};

export const fetchPodcastDetails = (podcastId) => {
  return fetch(`${CORS_PROXY}https://itunes.apple.com/lookup?id=${podcastId}`)
    .then(response => response.json())
    .then(data => data.results[0]);  // Prueba inicial
};

export const fetchPodcastEpisodes = (podcastId) => {
  return fetch(`${CORS_PROXY}https://itunes.apple.com/lookup?id=${podcastId}&entity=podcastEpisode&limit=9`)
    .then(response => response.json())
    .then(data => data.results.slice(1)); // El primer resultado es el podcast mismo, uso slice para obtener solo episodios
};
