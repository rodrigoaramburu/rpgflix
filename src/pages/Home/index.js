import React, { useState, useEffect } from 'react';
import { useAlert } from 'react-alert';
import styled from 'styled-components';
import Menu from '../../components/Menu';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';

import Neve1 from '../../assets/imgs/s1.png';
import Neve2 from '../../assets/imgs/s2.png';
import Neve3 from '../../assets/imgs/s3.png';

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
    fetch('https://www.botecodigital.info/react-api/categorias')
      .then(async (result) => {
        const channels = await result.json();
        setCanais([...channels]);
      },
      () => {
        alert.show('Erro ao recuperar canais', {
          timeout: 5000,
          type: 'error',
        });
      });
  }, []);

  return (
    <Main>
      <Menu />

      <BannerMain />

      {canais.map((value) => (
        <Carousel
          key={`id_${value.titulo}`}
          channel={value}
        />
      ))}

      <Footer />

    </Main>
  );
}

export default Home;
