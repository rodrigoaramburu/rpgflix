import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import PageDefault from '../../components/PageDefault';
import { Title } from '../../components/Carousel/styles';
import Button from '../../components/Button';

import channelRepository from '../../repositories/channel';

export const VideoWrap = styled.div`
    position:relative;
    padding:0 5%;
    min-height:450px;
`;

export const ResponsiveIframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
`;

function Video() {
  const { idvideo } = useParams();

  const [video, setVideo] = useState({
    titulo: 'Carregando',
    url: '',
    description: '',
    videoID: '',
    channel: {
      channelID: '',
      title: 'Carregando',
      extra_link: '#',
      cor: '#FF0000',
    },
  });

  useEffect(() => {
    channelRepository.getVideo(idvideo)
      .then((data) => {
        setVideo(data);
      }).catch((e) => {
        alert.show(e.message, {
          timeout: 5000,
          type: 'error',
        });
      });
  }, [idvideo]);

  return (
    <PageDefault>
      <VideoWrap>
        <ResponsiveIframe
          title="Titulo do Iframe"
          src={`https://www.youtube.com/embed/${idvideo}?autoplay=0&mute=1`}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </VideoWrap>
      <Title style={{ background: video.channel.cor || 'red' }}>{video.channel.title}</Title>
      <h1>{video.title}</h1>
      <Button href={`https://www.youtube.com/watch?v=${video.videoID}`} as="a" target="_blank">
        <i className="fab fa-youtube" />
        {' '}
        Ver Video no Youtube
      </Button>
      {' '}
      <Button href={video.channel.link} as="a" target="_blank">
        <i className="fab fa-youtube" />
        {' '}
        Ir para o Canal
      </Button>
      <pre>{video.description}</pre>
    </PageDefault>
  );
}

export default Video;
