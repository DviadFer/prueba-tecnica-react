import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./views/home";
import PodcastDetail from "./views/podcastDetail";
import EpisodeDetail from "./views/episodeDetail";
import Header from "./views/components/header";
import styles from "./styles/styles.scss";

function App() {
  const [isLoading, setLoading] = useState(false);

  return (
    <Router>
      <main className="main-wrapper">
        <Header isLoading={isLoading} />
        <Routes>
          <Route path="/" element={<Home setLoading={setLoading} />} />
          <Route path="/podcast/:podcastId" element={<PodcastDetail setLoading={setLoading} />} />
          <Route path="/podcast/:podcastId/episode/:episodeId" element={<EpisodeDetail setLoading={setLoading} />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;