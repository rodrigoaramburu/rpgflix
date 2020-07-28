import React from 'react' ;
import Logo from  '../../assets/imgs/logo.png';
import './Menu.css'
import ButtonLink from './components/ButtonLink';
import Button from '../Button'
import dadosIniciais from '../../data/dados_iniciais.json';


function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img src={Logo} className="Logo" alt="Aluraflix" />
            </a>

            <Button as="a" href="/" className="ButtonLink">
                Novo Vídeo
            </Button>

            
        </nav>
    );
}


export default Menu;