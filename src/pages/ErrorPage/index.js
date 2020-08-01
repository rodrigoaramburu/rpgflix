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
      <p>Ao tentar acessar a página você foi puxado para dentro de um portal e foi parar dentro de uma dungeon. Eu não teria muita esperança de encontrar a saida.</p>
      <IframeWrap>
        <Iframe
          title="Game"
          src="https://www.botecodigital.info/react-api/game"
          frameBorder="0"
          focus
        />
      </IframeWrap>
      <p>ps.: Sim o mapa e as colisões estão ruins.</p>
    </PageDefault>
  );
}

export default ErrorPage;
