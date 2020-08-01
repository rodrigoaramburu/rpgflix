import React from 'react';
import styled from 'styled-components';
import PageDefault from '../../components/PageDefault';

export const Iframe = styled.iframe`
  width: 410px;
  height: 310px;
  margin:30px;
  border:5px solid var(--primary)
`;

export const IframeWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

function ErrorPage() {
  return (
    <PageDefault>
      <h1>Página não encontrada</h1>
      <p>A página buscada esta como você. Perdido em uma Dungeon. Eu não teria muita esperença de encontrar alguma coisa</p>
      <IframeWrap>
        <Iframe
          title="Game"
          src="https:/www.botecodigital.info/react-api/game"
          frameBorder="0"
          focus
        />
      </IframeWrap>
      <p>ps.: Sim o mapa e as colisões estão ruins.</p>
    </PageDefault>
  );
}

export default ErrorPage;
