import React, { useState } from 'react';
import Menu from '../../components/Menu';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';

function Home(){

  const [categorias,setCategorias] = useState([])
  const [loaded, setLoaded] = useState(false)


  if( !loaded ){
    fetch("https://www.botecodigital.info/react-api/categorias")
      .then(res => res.json())
      .then(
        (result) => {
          setCategorias( result )
          setLoaded(true)
        },
        (error) => {
          console.log(error);
        }
      );
    return (<p>Carregando</p>);
  }
  
  return (
    <div style={{ background: "#141414" }}>
      <Menu />

      <BannerMain /> 


      {categorias.map((value, index) => {
          return <Carousel
                  key={index}
                  category={value}
                />
        }
      )}


      <Footer />

    </div>
  );
}


export default Home;
