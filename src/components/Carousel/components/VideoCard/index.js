import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { VideoCardContainer, VideoCardContainerParent } from './styles';

function getYouTubeId(youtubeURL) {
  return youtubeURL
    .replace(
      /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,
      '$7',
    );
}

function VideoCard({ videoTitle, videoURL, categoryColor }) {
  const idvideo = getYouTubeId(videoURL);
  const image = `https://img.youtube.com/vi/${idvideo}/hqdefault.jpg`;
  const url = `/video/${idvideo}`;
  return (
    <VideoCardContainerParent
      style={{ borderColor: categoryColor || 'red' }}
    >

      <VideoCardContainer
        as={Link}
        url={image}
        to={url}
        title={videoTitle}
      />

    </VideoCardContainerParent>
  );
}

VideoCard.propTypes = {
  videoTitle: PropTypes.string.isRequired,
  videoURL: PropTypes.string.isRequired,
  categoryColor: PropTypes.string.isRequired,
};

export default VideoCard;
