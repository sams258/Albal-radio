"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

type Track = {
  title: string;
  date?: number;
  enclosure?: {
    url?: string;
  };
};

const ignoredPrefixes = ["Jingle", "ID", "Promo", "Spot", "RADIO"];

export default function RecentTracksModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [tracks, setTracks] = useState<Track[]>([]);

  const fetchTracks = async () => {
    try {
      const res = await fetch(
        "https://dione.shoutca.st/recentfeed/albal/json?limit=20"
      );
      const data = await res.json();

      const allTracks: Track[] = data.items || [];
      const filtered = allTracks.filter(
        (track) =>
          track.title &&
          !ignoredPrefixes.some((prefix) =>
            track.title.toLowerCase().startsWith(prefix.toLowerCase())
          )
      );

      setTracks(filtered.slice(0, 10));
    } catch (err) {
      console.error("Failed to fetch tracks:", err);
    }
  };

  useEffect(() => {
    fetchTracks();
    const interval = setInterval(fetchTracks, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="floating-track-button">
        <button className="track-history-btn" onClick={() => setIsOpen(true)}>
          🎶
        </button>
      </div>

      {isOpen && (
        <div className="track-modal-overlay" onClick={() => setIsOpen(false)}>
          <div className="track-modal" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setIsOpen(false)}>
              ×
            </button>
            <h2>🎶 Recently Played</h2>
            <ul className="track-list">
              {tracks.map((track, idx) => (
                <li key={idx} className="track-item">
                  <div className="track-cover-wrapper">
                    <Image
                      src={track.enclosure?.url || "/fallback.png"}
                      alt="Cover"
                      width={48}
                      height={48}
                      className="track-cover"
                      unoptimized
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "/fallback.png";
                      }}
                    />
                  </div>
                  <span>{track.title}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
