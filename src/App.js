import React from 'react';
import Menu from './components/Menu';
import BannerMain from './components/BannerMain';
import Carousel from './components/Carousel';
import Footer from './components/Footer';
import dadosIniciais from './data/dados_iniciais.json';


class AppComponent extends React.Component{


  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }


  componentDidMount() {
    fetch("https://botecodigital.info/react-api/")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result
          });
        },
        // Nota: É importante lidar com os erros aqui
        // em vez de um bloco catch() para não recebermos
        // exceções de erros dos componentes.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }



  render() {

    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {

      return (
        <div style={{ background: "#141414" }}>
          <Menu />

          <BannerMain
            videoTitle={items.categorias[0].videos[0].titulo}
            url={items.categorias[0].videos[0].url}
            videoDescription={ items.categorias[0].videos[0].description }
          />


          {items.categorias.map((value, index) => {
            return <Carousel
                    category={value}
                  />
          })}


          <Footer />

        </div>
      );
  }
}

}
export default AppComponent;
