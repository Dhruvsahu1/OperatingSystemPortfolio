import React from "react";
import MacWindow from "./MacWindow";
import "./spotify.scss"

const Spotify = ({ windowName, setWindowsState }) => {
  return (
    <MacWindow width="25vw" height="70vh">
      <div className="spotify-window">
        <iframe
          data-testid="embed-iframe"
          style={{ borderRadius: "12px" }}
          src="https://open.spotify.com/embed/playlist/37i9dQZF1DWZNJXX2UeBij?utm_source=generator&theme=0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        ></iframe>
      </div>
    </MacWindow>
  );
};

export default Spotify;
