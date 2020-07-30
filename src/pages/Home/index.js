import React, { useState, useEffect } from 'react';
import { useAlert } from 'react-alert';
import Menu from '../../components/Menu';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';

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
    <div style={{ background: '#141414' }}>
      <Menu />

      <BannerMain />

      {canais.map((value) => (
        <Carousel
          key={`id_${value.titulo}`}
          channel={value}
        />
      ))}

      <Footer />

    </div>
  );
}

export default Home;
