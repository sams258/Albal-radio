"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Pause, Volume2 } from "lucide-react";

type ServerType = "centova" | "radioboss";

interface Metadata {
  artist: string;
  title: string;
  cover: string;
}

export const LiveAudioPlayer = ({
  streamUrl,
  metaUrl,
  serverType,
}: {
  streamUrl: string;
  metaUrl: string;
  serverType: ServerType;
}) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(0.8);
  const [currentSong, setCurrentSong] = useState<Metadata>({
    artist: "",
    title: "",
    cover: "",
  });
  const [errorCount, setErrorCount] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const interval = setInterval(async () => {
      const metadata = await fetchMetadata(serverType, metaUrl);
      setCurrentSong(metadata);
      setImageLoaded(false);

      // ✅ Media Session API for lock screen
      if ('mediaSession' in navigator && metadata.title) {
        navigator.mediaSession.metadata = new MediaMetadata({
          title: metadata.title,
          artist: metadata.artist || 'Albal Radio',
          album: 'Live Stream',
          artwork: [
            {
              src: metadata.cover || '/icon.png',
              sizes: '512x512',
              type: 'image/png',
            },
          ],
        });

        navigator.mediaSession.setActionHandler('play', () => {
          audioRef.current?.play();
          setPlaying(true);
        });

        navigator.mediaSession.setActionHandler('pause', () => {
          audioRef.current?.pause();
          setPlaying(false);
        });
      }
    }, 15000);

    return () => clearInterval(interval);
  }, [serverType, metaUrl]);

  const handleAudioError = () => {
    console.warn("Audio error detected. Attempting to reconnect...");
    if (audioRef.current) {
      const retries = Math.min(errorCount + 1, 5);
      setTimeout(() => {
        audioRef.current?.load();
        audioRef.current?.play().catch(() => console.error("Retry failed."));
      }, retries * 3000);
      setErrorCount(retries);
    }
  };

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(console.error);
    }
    setPlaying(!playing);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  return (
    <div className="audio-player">
      <div className="player-info">
        <div className="cover-wrapper">
          {!imageLoaded && (
            <div className="cover-placeholder">
              <Image
                src="/fallback.png"
                alt="Fallback"
                width={48}
                height={48}
                priority
              />
            </div>
          )}
          {currentSong.cover && (
            <Image
              src={currentSong.cover}
              alt="Cover"
              width={48}
              height={48}
              className="cover-image"
              onLoad={() => setImageLoaded(true)}
              style={{ display: imageLoaded ? "block" : "none" }}
            />
          )}
        </div>

        <div className="text-info">
          <span className="station-name">AlBal Radio</span>
          <div className="marquee-container">
            <div className="marquee-track">
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentSong.artist + currentSong.title}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6 }}
                  className="song-title"
                >
                  {currentSong.artist && currentSong.title
                    ? `${currentSong.artist} - ${currentSong.title}`
                    : "Loading Song info..."}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      <div className="controls">
        <button onClick={togglePlay} className="play-button">
          {playing ? <Pause size={20} /> : <Play size={20} />}
        </button>

        <div className="volume-control">
          <Volume2 size={20} />
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={handleVolumeChange}
            className="volume-slider"
          />
        </div>
      </div>

      <audio
        ref={audioRef}
        src={streamUrl}
        preload="none"
        onError={handleAudioError}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      />
    </div>
  );
};

async function fetchMetadata(
  serverType: ServerType,
  endpointUrl: string
): Promise<Metadata> {
  try {
    const response = await fetch(endpointUrl);
    const textData = await response.text();
    let jsonData;
    if (textData.trim().startsWith("{") || textData.trim().startsWith("[")) {
      jsonData = JSON.parse(textData);
    } else {
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(textData, "application/xml");
      if (serverType === "centova") {
        const artist = xmlDoc.querySelector("artist")?.textContent ?? "";
        const title = xmlDoc.querySelector("title")?.textContent ?? "";
        return { artist, title, cover: "" };
      } else {
        return { artist: "", title: "", cover: "" };
      }
    }

    if (serverType === "centova") {
      const firstItem = jsonData.items?.[0];
      if (!firstItem || !firstItem.title) {
        return { artist: "", title: "", cover: "" };
      }
      const [artistPart, titlePart] = firstItem.title.split(" - ", 2);
      const coverUrl = firstItem.enclosure?.url ?? "";
      return {
        artist: artistPart || "",
        title: titlePart || "",
        cover: coverUrl,
      };
    } else if (serverType === "radioboss") {
      return {
        artist: jsonData.current_song?.artist || "",
        title: jsonData.current_song?.title || "",
        cover: "",
      };
    } else {
      return { artist: "", title: "", cover: "" };
    }
  } catch (error) {
    console.error("Failed to fetch metadata:", error);
    return { artist: "", title: "", cover: "" };
  }
}
