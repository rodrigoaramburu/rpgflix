import React from 'react';
import { VideoCardContainer,VideoCardContainerParent } from './styles';

function getYouTubeId(youtubeURL) {
    return youtubeURL
      .replace(
        /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,
        '$7',
      );
  }

  function VideoCard({ videoTitle, videoURL, categoryColor }) {
    const image = `https://img.youtube.com/vi/${getYouTubeId(videoURL)}/hqdefault.jpg`;
    return (
      <VideoCardContainerParent 
        style={{ borderColor: categoryColor || 'red' }}>

        <VideoCardContainer
          url={image}
          href={videoURL}
          target="_blank"
          
          title={videoTitle}
        />

      </VideoCardContainerParent>
    );
  }
  
  export default VideoCard;