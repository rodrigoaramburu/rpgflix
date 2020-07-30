import React from 'react';
import styled from 'styled-components';

import Dado from '../../assets/imgs/dado.png';

const CarregandoWrapper = styled.div`
    display: flex;
    justify-content: left;
    align-items: center;:center;
    min-height:100px;
    font-size: 1.2em;

    img{
        margin-right:20px;
        animation: rodar 5s linear infinite;
        transform: scale(0.5);
    }


    @keyframes rodar {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }
`;

function Carregando() {
  return (
    <CarregandoWrapper>
      <img src={Dado} alt="Dado d20" />
      Carregando ...
    </CarregandoWrapper>
  );
}

export default Carregando;
