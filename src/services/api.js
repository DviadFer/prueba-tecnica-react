const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";

export const fetchTopPodcasts = () => {
  return fetch('https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json')
    .then(response => response.json())
    .then(data => data.feed.entry);
};

export const fetchPodcastDetails = (podcastId) => {
  return fetch(`${CORS_PROXY}https://itunes.apple.com/lookup?id=${podcastId}&entity=podcastEpisode&limit=9`)
      .then(response => response.json())
      .then(data => {
          // Dividiendo los resultados en los detalles del podcast y los episodios
          const podcastDetails = data.results[0];
          const episodes = data.results.slice(1);

          return {
              details: podcastDetails,
              episodes: episodes
          };
      });
};

