import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { VideoCardContainer, VideoCardContainerParent } from './styles';

// function getYouTubeId(youtubeURL) {
//   return youtubeURL
//     .replace(
//       /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,
//       '$7',
//     );
// }

function VideoCard({ title, videoID, cor }) {
  const image = `https://img.youtube.com/vi/${videoID}/hqdefault.jpg`;
  const url = `/video/${videoID}`;
  return (
    <VideoCardContainerParent
      style={{ borderColor: cor || 'red' }}
    >

      <VideoCardContainer
        as={Link}
        url={image}
        to={url}
        title={title}
      >
        <span>{title}</span>
      </VideoCardContainer>

    </VideoCardContainerParent>
  );
}

VideoCard.propTypes = {
  title: PropTypes.string.isRequired,
  videoID: PropTypes.string.isRequired,
  cor: PropTypes.string.isRequired,
};

export default VideoCard;
