import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./views/home";
// import PodcastDetail from "./views/podcastDetail";
// import EpisodeDetail from "./views/episodeDetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/podcast/:podcastId" element={<PodcastDetail />} />
        <Route path="/podcast/:podcastId/episode/:episodeId" element={<EpisodeDetail />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
