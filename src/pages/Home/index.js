import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useAlert } from 'react-alert';
import Menu from '../../components/Menu';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';

import Neve1 from '../../assets/imgs/s1.png';
import Neve2 from '../../assets/imgs/s2.png';
import Neve3 from '../../assets/imgs/s3.png';

import channelRepository from '../../repositories/channel';

const Main = styled.main`
    background-color: #141414;
    background-image: url(${Neve1}), url(${Neve2}), url(${Neve3});
    animation: snow 10s linear infinite;
    

    @keyframes snow {
      0% {background-position:   0px   0px,   0px   0px,   0px    0px;}
      50% {background-position:  -20px  250px,  -50px 200px,   -20px  150px;}
      100% {background-position: 0px  500px , 0px 400px ,  0px  300px;}
    }

`;

function Home() {
  const [canais, setCanais] = useState([]);
  const alert = useAlert();
  useEffect(() => {
    channelRepository.getAllChannels()
      .then((data) => {
        setCanais([...data]);
      }).catch(() => {
        alert.show('Erro ao recuperar canais', {
          timeout: 5000,
          type: 'error',
        });
      });
  }, [alert]);

  return (
    <Main>
      <Menu />

      <BannerMain />

      {canais.map((value) => (
        <Carousel
          key={`id_${value.title}`}
          channel={value}
        />
      ))}

      <Footer />

    </Main>
  );
}

export default Home;
