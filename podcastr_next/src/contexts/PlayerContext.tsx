import { createContext, ReactNode, useContext, useState } from "react";

type Episode = { 
  title: string;
  thumbnail: string;
  members: string;
  duration: number;
  url: string;
}

type PlayerContextData = { 
  episodeList: Episode[];
  // episodeList: Array<Episode>;
  currentEpisodeIndex: number;
  isPlaying: boolean;
  hasPrevious: boolean;
  hasNext: boolean;
  isLooping: boolean;
  isShuffling: boolean;
  play: (episode: Episode) => void;
  playlist: (list: Episode[], index: number) => void;
  setPlayingState: (state: boolean) => void;
  playNext: () => void;
  playPrevious: () => void;
  togglePlay: () => void;
  toggleLoop: () => void;
  toggleShuffling: () => void;
  clearPlayerState: () => void;
}

export const PlayerContext = createContext({} as PlayerContextData);

type PlayerContextProviderProps = { 
  children: ReactNode;
}

export function PlayerContextProvider({ children }: PlayerContextProviderProps) {
  const [episodeList, setEpisodeList] = useState([]);
  const [currentEpisodeIndex, setCurrentEpisodeIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLooping, setIsLooping] = useState(false);
  const [isShuffling, setIsShuffling] = useState(false);

  function play(episode: Episode) {
    setEpisodeList([episode]);
    setCurrentEpisodeIndex(0);
    setIsPlaying(true);
  }

  function playlist(list: Episode[], index: number) {
    setEpisodeList(list);
    setCurrentEpisodeIndex(index);
    setIsPlaying(true);
  }

  const hasPrevious = currentEpisodeIndex > 0;
  const hasNext = isShuffling || (currentEpisodeIndex + 1) < episodeList.length;

  function playNext() {
    // const nextEpisodeIndex = currentEpisodeIndex + 1;
    if (isShuffling) {
      const nextRandomIndex = Math.floor(Math.random() * episodeList.length);
      setCurrentEpisodeIndex(nextRandomIndex);
    } else if (hasNext) {
      setCurrentEpisodeIndex(currentEpisodeIndex + 1);
    }
  }

  function playPrevious() {
    if (hasPrevious) {
      setCurrentEpisodeIndex(currentEpisodeIndex - 1);
    }
  }

  function clearPlayerState() {
    setEpisodeList([]);
    setCurrentEpisodeIndex(0);
  }

  function togglePlay() {
    setIsPlaying(!isPlaying);
  }

  function toggleLoop() {
    setIsLooping(!isLooping);
  }

  function toggleShuffling() {
    setIsShuffling(!isShuffling);
  }

  function setPlayingState(state: boolean) {
    setIsPlaying(state);
  }

  return (
    <PlayerContext.Provider
      value={{
        episodeList: episodeList,
        currentEpisodeIndex: currentEpisodeIndex,
        isPlaying,
        hasPrevious,
        hasNext,
        isLooping,
        isShuffling,
        play,
        playlist,
        playNext,
        playPrevious,
        togglePlay,
        setPlayingState,
        toggleLoop,
        toggleShuffling,
        clearPlayerState
      }}
    >
     {children} 
    </PlayerContext.Provider>
  );
}

export const usePlayer = () => {
  return useContext(PlayerContext);
};