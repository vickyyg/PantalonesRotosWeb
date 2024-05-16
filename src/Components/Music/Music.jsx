import React from 'react';
import './Music.css'

const Music = () => {
  // Array de IDs de los videos de YouTube
  const videoIds = ["nR-SUxb8OMo", "hcsariFvtxA", "o8eJj2iS_0M", "6DDsvkbxmsg", "nEmfr-OiTEE", "r2AIPPXnOJM"];

  return (
    <div>
      <div className="video-container">
        {/* Mapear los IDs de los videos y renderizar iframes para cada uno */}
        {videoIds.map((videoId) => (
          <iframe
            key={videoId}
            width="460"
            height="215"
            src={`https://www.youtube.com/embed/${videoId}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
           className='videos'></iframe>
        ))}
      </div>
    </div>
  );
};

export default Music;

