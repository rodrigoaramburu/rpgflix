import React, { useState, useEffect } from 'react';
import { useAlert } from 'react-alert';
import VideoIframeResponsive from './components/VideoIframeResponsive';
import { BannerMainContainer, ContentAreaContainer, WatchButton } from './styles';

import BannerInicial from '../../assets/imgs/banner.png';
import channelRepository from '../../repositories/channel';

// function getYouTubeId(youtubeURL) {
//   return youtubeURL.replace(
//     /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,
//     '$7',
//   );
// }

function BannerMain() {
  const [bannerValores, setBannerValores] = useState({
    title: 'Carregando ..',
    description: 'Carregando ...',
    videoID: '',
  });

  const alert = useAlert();

  useEffect(() => {
    channelRepository.getLastVideo()
      .then((data) => {
        setBannerValores({
          title: data.titulo,
          description: data.description,
          videoID: data.videoID,
        });
      })
      .catch((e) => {
        alert.show(e.message, {
          timeout: 5000,
          type: 'error',
        });
      });
  }, [alert]);

  // const youTubeID = getYouTubeId();
  const bgUrl = bannerValores.videoID === '' ? BannerInicial : `https://img.youtube.com/vi/${bannerValores.videoID}/maxresdefault.jpg`;

  return (
    <BannerMainContainer backgroundImage={bgUrl}>
      <ContentAreaContainer>
        <ContentAreaContainer.Item>

          <ContentAreaContainer.Title>
            {bannerValores.titulo}
          </ContentAreaContainer.Title>

          <ContentAreaContainer.Description>
            {bannerValores.description}
          </ContentAreaContainer.Description>
        </ContentAreaContainer.Item>

        <ContentAreaContainer.Item>
          <VideoIframeResponsive youtubeID={bannerValores.videoID} />
          <WatchButton as="a" href={`https://www.youtube.com/watch?v=${bannerValores.videoID}`} target="_blank">
            <i className="fab fa-youtube" />
            {' '}
            Assistir
          </WatchButton>
        </ContentAreaContainer.Item>
      </ContentAreaContainer>
    </BannerMainContainer>
  );
}

export default BannerMain;
