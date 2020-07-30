import React, { useState, useEffect } from 'react';
import VideoIframeResponsive from './components/VideoIframeResponsive';
import { BannerMainContainer, ContentAreaContainer, WatchButton } from './styles';

import BannerInicial from '../../assets/imgs/banner.png';

function getYouTubeId(youtubeURL) {
  return youtubeURL.replace(
    /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,
    '$7',
  );
}

function BannerMain() {
  const [bannerValores, setBannerValores] = useState({
    videoTitle: 'Carregando ..',
    videoDescription: 'Carregando ...',
    url: '',
  });

  useEffect(() => {
    fetch('https://www.botecodigital.info/react-api/videos/last')
      .then((res) => res)
      .then(async (result) => {
        const data = await result.json();
        setBannerValores({
          videoTitle: data.titulo,
          videoDescription: '',
          url: data.url,
        });
      },
      () => {
        alert.show('Erro ao recuperar dados do banner', {
          timeout: 5000,
          type: 'error',
        });
      });
  }, []);

  const youTubeID = getYouTubeId(bannerValores.url);
  const bgUrl = youTubeID === '' ? BannerInicial : `https://img.youtube.com/vi/${youTubeID}/maxresdefault.jpg`;

  return (
    <BannerMainContainer backgroundImage={bgUrl}>
      <ContentAreaContainer>
        <ContentAreaContainer.Item>

          <ContentAreaContainer.Title>
            {bannerValores.videoTitle}
          </ContentAreaContainer.Title>

          <ContentAreaContainer.Description>
            {bannerValores.videoDescription}
          </ContentAreaContainer.Description>
        </ContentAreaContainer.Item>

        <ContentAreaContainer.Item>
          <VideoIframeResponsive youtubeID={youTubeID} />
          <WatchButton>
            Assistir
          </WatchButton>
        </ContentAreaContainer.Item>
      </ContentAreaContainer>
    </BannerMainContainer>
  );
}

export default BannerMain;
