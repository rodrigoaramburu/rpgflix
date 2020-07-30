import React, { useState, useEffect } from 'react';
import { useAlert } from 'react-alert';
import PropTypes from 'prop-types';
import { VideoCardGroupContainer, Title, ExtraLink } from './styles';
import VideoCard from './components/VideoCard';
import Slider, { SliderItem } from './components/Slider';
import Carregando from '../Carregando';

function Carousel({ ignoreFirstVideo, channel }) {
  const [videos, setVideos] = useState([]);

  const alert = useAlert();

  useEffect(() => {
    fetch(`https://www.botecodigital.info/react-api/categorias/${channel.channel_id}/videos`)
      .then(async (result) => {
        const vs = await result.json();
        setVideos([...vs]);
      },
      () => {
        alert.show(`Erro ao recuperar lista videos de '${channel.titulo}'`, {
          timeout: 5000,
          type: 'error',
        });
      });
  }, []);

  return (
    <VideoCardGroupContainer>
      {channel.titulo && (
      <>
        <Title style={{ background: channel.cor || 'red' }}>
          {channel.titulo}
        </Title>

        { channel.link_extra
                    && (
                    <ExtraLink href={channel.link_extra.url} target="_blank">
                      {channel.link_extra.text}
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
            <SliderItem key={video.titulo}>
              <VideoCard
                videoTitle={video.titulo}
                videoURL={video.url}
                categoryColor={channel.cor}
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
