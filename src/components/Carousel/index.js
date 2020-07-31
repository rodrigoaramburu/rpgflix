import React, { useState, useEffect } from 'react';
import { useAlert } from 'react-alert';
import PropTypes from 'prop-types';
import { VideoCardGroupContainer, Title, ExtraLink } from './styles';
import VideoCard from './components/VideoCard';
import Slider, { SliderItem } from './components/Slider';
import Carregando from '../Carregando';

import channelRepository from '../../repositories/channel';

function Carousel({ ignoreFirstVideo, channel }) {
  const [videos, setVideos] = useState([]);

  const alert = useAlert();

  useEffect(() => {
    channelRepository.getVideosByChannel(channel)
      .then((data) => {
        setVideos([...data]);
      })
      .catch((e) => {
        alert.show(e`Erro ao recuperar lista videos de '${channel.titulo}'`, {
          timeout: 5000,
          type: 'error',
        });
      });
  }, [alert, channel]);

  return (
    <VideoCardGroupContainer>
      {channel.title && (
      <>
        <Title style={{ background: channel.cor || 'red' }}>
          {channel.title}
        </Title>

        { channel.description
                    && (
                    <ExtraLink href={channel.link} target="_blank">
                      {channel.description}
                    </ExtraLink>
                    )}
      </>
      )}

      { videos.length === 0 && (
        <Carregando />
      )}

      <Slider>
        {videos.map((video, index) => {
          if (ignoreFirstVideo && index === 0) {
            return null;
          }

          return (
            <SliderItem key={video.title}>
              <VideoCard
                title={video.title}
                videoID={video.videoID}
                cor={channel.cor}
              />
            </SliderItem>
          );
        })}

      </Slider>

    </VideoCardGroupContainer>
  );
}

Carousel.defaultProps = {
  ignoreFirstVideo: false,
};

Carousel.propTypes = {
  ignoreFirstVideo: PropTypes.bool,
  channel: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Carousel;
