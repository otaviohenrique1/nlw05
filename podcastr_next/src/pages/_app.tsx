import '../styles/globals.scss'
import styles from '../styles/app.module.scss';
import Header from '../components/Header';
import Player from "../components/Player";
import { PlayerContextProvider } from "../contexts/PlayerContext";

function MyApp({ Component, pageProps }) {
  return (
    <PlayerContextProvider>
      <div className={styles.wrapper}>
        <main>
          <Header />
          <Component {...pageProps} />
        </main>
        <Player />
      </div>
    </PlayerContextProvider>
  );
}

export default MyApp

/*
import { PlayerContext } from '../contexts/PlayerContext';
import { useState } from 'react';
const [episodeList, setEpisodeList] = useState([]);
  const [currentEpisodeIndex, setCurrentEpisodeIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  function play(episode) {
    setEpisodeList([episode]);
    setCurrentEpisodeIndex(0);
    setIsPlaying(true);
  }

  function togglePlay() {
    setIsPlaying(!isPlaying);
  }

  function setPlayingState(state: boolean) {
    setIsPlaying(state);
  }
<PlayerContext.Provider
      value={{
        episodeList: episodeList,
        currentEpisodeIndex: currentEpisodeIndex,
        isPlaying,
        play,
        togglePlay,
        setPlayingState
      }}
    >
    </PlayerContext.Provider>
*/