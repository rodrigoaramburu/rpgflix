import { useState } from 'react';

import channelRepository from '../repositories/channel';

function useForm(setReload, alert) {
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

  function deletar(event, channelId) {
    if (window.confirm('Deseja realmente deletar? ')) {
      alert.show('Deletando...', {
        timeout: 5000,
      });

      channelRepository.deletar(channelId)
        .then(() => {
          setReload(false);
          alert.show('Deletado', {
            timeout: 10000,
            type: 'success',
          });
        })
        .catch((e) => {
          alert.show(e.message, {
            timeout: 10000,
            type: 'error',
          });
        });
    }
  }

  function enviar(event) {
    event.preventDefault();
    const data = {
      title: values.nomeCanal,
      channelID: values.idCanal,
      description: values.descricaoCanal,
      link: values.linkCanal,
      cor: values.corCanal,
    };
    alert.show('Adicionando e recuperando videos. Aguarde pode demorar...', {
      timeout: 5000,
    });

    channelRepository.adicionar(data)
      .then(() => {
        setReload(false);
        setValues({
          nomeCanal: '',
          idCanal: '',
          linkCanal: '',
          descricaoCanal: '',
          corCanal: '#0000FF',
        });
        alert.show(`${values.nomeCanal} adicionado`, {
          timeout: 10000,
          type: 'success',
        });
      })
      .catch((e) => {
        alert.show(e.message, {
          timeout: 10000,
          type: 'error',
        });
      });
  }

  return {
    values,
    handleChange,
    deletar,
    enviar,

  };
}

export default useForm;
