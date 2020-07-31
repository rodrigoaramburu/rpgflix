import React, { useState, useEffect } from 'react';
import { useAlert } from 'react-alert';

import PageDefault from '../../components/PageDefault';
import FormField from '../../components/FormField';
import {
  Table, Row, TableHeader, TableContent, TableContainer,
} from './styles';
import Button from '../../components/Button';

function CadastroVideo() {
  const [values, setValues] = useState({
    nomeCanal: '',
    idCanal: '',
    linkCanal: '',
    descricaoCanal: '',
    corCanal: '#0000FF',
  });

  function setValue(key, value) {
    setValues({
      ...values,
      [key]: value,
    });
  }

  function handleChange(event) {
    setValue(
      event.target.getAttribute('name'),
      event.target.value,
    );
  }

  const [canais, setCanais] = useState([]);
  const [reload, setReload] = useState(true);

  const alert = useAlert();

  useEffect(() => {
    fetch('https://www.botecodigital.info/react-api/categorias')
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
  }, [reload]);

  function deletar(event, channelId) {
    alert.show('Deletando...', {
      timeout: 5000,
    });
    if (window.confirm('Deseja realmente deletar? ')) {
      fetch(`https://www.botecodigital.info/react-api/categorias/${channelId}`, {
        method: 'DELETE',
      }).then(() => {
        setReload(false);
        alert.show('Deletado', {
          timeout: 10000,
          type: 'success',
        });
      });
    }
  }

  function enviar(event) {
    event.preventDefault();
    const data = {
      title: values.nomeCanal,
      channelID: values.idCanal,
      extra_title: values.descricaoCanal,
      extra_link: values.linkCanal,
      cor: values.corCanal,
    };
    alert.show('Adicionando...', {
      timeout: 5000,
    });

    fetch('https://www.botecodigital.info/react-api/categorias', {
      method: 'POST',
      body: JSON.stringify(data),
    }).then(() => {
      setReload(false);
      alert.show(`${values.nomeCanal} adicionado`, {
        timeout: 10000,
        type: 'success',
      });
    });

    setValues({
      nomeCanal: '',
      idCanal: '',
      linkCanal: '',
      descricaoCanal: '',
      corCanal: '#0000FF',
    });
  }
  return (
    <PageDefault>
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
          <Button>
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
              <Row key={canal.channel_id}>
                <TableContent>{canal.titulo}</TableContent>
                <TableContent>{canal.channel_id}</TableContent>
                <TableContent>{canal.link_extra.text}</TableContent>
                <TableContent style={{ backgroundColor: canal.cor }}>{canal.cor}</TableContent>
                <TableContent>
                  <Button onClick={(event) => { deletar(event, canal.channel_id); }}>
                    <i className="fas fa-trash-alt" />
                  </Button>
                </TableContent>
              </Row>
            )) }
          </tbody>
        </Table>
      </TableContainer>

    </PageDefault>
  );
}

export default CadastroVideo;
