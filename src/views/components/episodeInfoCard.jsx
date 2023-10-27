const EpisodeInfoCard = ({ episode }) => {

    const formatDescription = (description) => {
        return { __html: description.replace(/\n/g, '<br>') };
      };

    return (
        <div className="episode-content">
            <h1>{episode.trackName}</h1>
            <p dangerouslySetInnerHTML={formatDescription(episode.description)} />
            <audio controls src={episode.previewUrl}>
                Tu navegador no soporta el elemento <code>audio</code>.
            </audio>
        </div>
    );
};

export default EpisodeInfoCard;