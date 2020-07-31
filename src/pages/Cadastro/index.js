import React, { useState, useEffect } from 'react';
import { useAlert } from 'react-alert';

import PageDefault from '../../components/PageDefault';
import FormField from '../../components/FormField';
import {
  Table, Row, TableHeader, TableContent, TableContainer,
} from './styles';
import Button from '../../components/Button';
import useForm from '../../hooks/useForm';
import URL_BACKEND from '../../config';

function CadastroVideo() {
  const [canais, setCanais] = useState([]);
  const [reload, setReload] = useState(true);

  const alert = useAlert();

  const {
    values, handleChange, deletar, enviar,
  } = useForm(setReload, alert);

  useEffect(() => {
    fetch(`${URL_BACKEND}/channels`)
      .then(async (result) => {
        const data = await result.json();
        setCanais([...data]);
      },
      () => {
        alert.show('Erro ao recuperar canais', {
          timeout: 5000,
          type: 'error',
        });
      });
  }, [reload, alert]);

  return (
    <PageDefault>
      <div>
        <h1>
          Cadastro de Canal:
          {values.nomeCanal}
        </h1>

        <p>
          * Se não souber o id do canal que deseja adicionar você pode buscar em
          <a href="https://commentpicker.com/youtube-channel-id.php" target="_blank" rel="noopener noreferrer"> https://commentpicker.com/youtube-channel-id.php</a>
        </p>

        <form onSubmit={enviar}>

          <FormField
            label="Nome Canal"
            name="nomeCanal"
            type="text"
            className="input"
            value={values.nomeCanal}
            onChange={handleChange}
          />

          <FormField
            label="ID do Canal:( Ex.: UCQe5_872pzm_ZTOgebq1qpw)"
            name="idCanal"
            type="text"
            className="input"
            value={values.idCanal}
            onChange={handleChange}
          />

          <FormField
            label="Link do Canal:"
            name="linkCanal"
            type="text"
            className="input"
            value={values.linkCanal}
            onChange={handleChange}
          />

          <FormField
            label="Descrição:"
            name="descricaoCanal"
            type="textarea"
            className="input"
            value={values.descricaoCanal}
            onChange={handleChange}
          />

          <FormField
            label="Cor: "
            name="corCanal"
            type="color"
            className="color"
            value={values.corCanal}
            onChange={handleChange}
          />
          <div style={{ paddingTop: `${15}px` }}>
            <Button type="submit">
              <i className="fas fa-save" />
              {' '}
              Salvar
            </Button>
          </div>
        </form>
        <TableContainer>
          <Table>
            <thead>
              <Row>
                <TableHeader>Titulo</TableHeader>
                <TableHeader>ID Canal</TableHeader>
                <TableHeader>Descrição</TableHeader>
                <TableHeader>Cor</TableHeader>
                <TableHeader>Ações</TableHeader>
              </Row>
            </thead>
            <tbody>
              {canais.map((canal) => (
                <Row key={canal.channelId}>
                  <TableContent>{canal.title}</TableContent>
                  <TableContent>{canal.channelId}</TableContent>
                  <TableContent>{canal.description}</TableContent>
                  <TableContent style={{ backgroundColor: canal.cor }}>{canal.cor}</TableContent>
                  <TableContent>
                    <Button onClick={(event) => { deletar(event, canal.channelId); }}>
                      <i className="fas fa-trash-alt" />
                    </Button>
                  </TableContent>
                </Row>
              )) }
            </tbody>
          </Table>
        </TableContainer>
      </div>
    </PageDefault>
  );
}

export default CadastroVideo;
