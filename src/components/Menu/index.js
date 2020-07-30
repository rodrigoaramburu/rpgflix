import React from 'react' ;
import Logo from  '../../assets/imgs/logo.png';
import './Menu.css';
import Button from '../Button';
import {Link, useLocation} from 'react-router-dom';

function Menu() {
    let location = useLocation();
    if( location.pathname !== '/cadastro/canal'){
        return (
            <nav className="Menu">
                <Link to="/">
                    <img src={Logo} className="Logo" alt="Aluraflix" />
                </Link>

                <Button as={Link} to="/cadastro/canal" className="ButtonLink" >
                    Novo Canal
                </Button>

                
            </nav>
        );
    }else{
        return (
            <nav className="Menu">
                <Link to="/">
                    <img src={Logo} className="Logo" alt="Aluraflix" />
                </Link>
            </nav>
        );
    }
}


export default Menu;