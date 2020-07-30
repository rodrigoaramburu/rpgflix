import React, { useState } from 'react';
import VideoIframeResponsive from './components/VideoIframeResponsive';
import {BannerMainContainer,ContentAreaContainer,WatchButton} from './styles'


function getYouTubeId(youtubeURL) {
  return youtubeURL.replace(
      /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,
      '$7',
    );
}

function BannerMain() {

  const [ bannerValores, setBannerValores ] = useState({
    videoTitle: 'Carregando ..',
    videoDescription: 'Carregando ...',
    url: '',
  });
  const[loaded, setLoaded] = useState(false);
  
  if( !loaded ){
    fetch("https://www.botecodigital.info/react-api/videos/last")
      .then(res => res.json())
      .then( (result) => {
          setBannerValores({
            videoTitle: result.titulo ,
            videoDescription: '',
            url: result.url
          });
            setLoaded(true);
        },
        (error) => {
          console.log(error);
        }
      );
      return (<p>Carregando</p>);
    }

    const youTubeID = getYouTubeId( bannerValores.url );
    const bgUrl = `https://img.youtube.com/vi/${youTubeID}/maxresdefault.jpg`;

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