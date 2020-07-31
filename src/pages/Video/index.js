import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import PageDefault from '../../components/PageDefault';
import { Title } from '../../components/Carousel/styles';
import Button from '../../components/Button';

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
    fetch(`https://www.botecodigital.info/react-api/videos/${idvideo}`)
      .then(async (result) => {
        const data = await result.json();
        setVideo(data);
      },
      () => {
        alert.show('Erro ao recuperar video', {
          timeout: 5000,
          type: 'error',
        });
      });
  }, []);

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
      <Title>{video.channel.title}</Title>
      <h1>{video.titulo}</h1>
      <Button href={video.url} as="a" target="_blank">
        <i className="fab fa-youtube" />
        {' '}
        Ver Video no Youtube
      </Button>
      {' '}
      <Button href={video.channel.extra_link} as="a" target="_blank">
        <i className="fab fa-youtube" />
        {' '}
        Ir para o Canal
      </Button>
      <p><pre>{video.description}</pre></p>
    </PageDefault>
  );
}

export default Video;
