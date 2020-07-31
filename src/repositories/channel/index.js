import URL_BACKEND from '../../config';

function getAllChannels() {
  return fetch(`${URL_BACKEND}/channels`)
    .then(async (result) => {
      if (result.ok) {
        const data = await result.json();
        return data;
      }
      throw new Error('Erro ao recuperar canais');
    });
}

function getVideo(idVideo) {
  return fetch(`${URL_BACKEND}/videos/${idVideo}`)
    .then(async (result) => {
      if (result.ok) {
        const data = await result.json();
        return data;
      }
      throw new Error('Erro ao recuperar video');
    });
}

function getLastVideo() {
  return fetch(`${URL_BACKEND}/videos/last`)
    .then(async (result) => {
      if (result.ok) {
        const data = await result.json();
        return data;
      }
      throw new Error('Erro ao recuperar último video');
    });
}

function getVideosByChannel(channel) {
  return fetch(`${URL_BACKEND}/channels/${channel.channelId}/videos`)
    .then(async (result) => {
      if (result.ok) {
        const data = await result.json();
        return data;
      }
      throw new Error(`Erro ao recuperar lista videos de '${channel.titulo}'`);
    });
}

function deletar(channelId) {
  return fetch(`${URL_BACKEND}/channels/${channelId}`, {
    method: 'DELETE',
  }).then((result) => {
    if (!result.ok) {
      throw new Error('Erro ao deletar canal');
    }
  });
}

function adicionar(data) {
  return fetch(`${URL_BACKEND}/channels`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then(async (result) => {
    if (result.ok) {
      const r = await result.json();
      if (r.status === 'error') {
        throw new Error(r.message);
      }
      return r;
    }

    throw new Error('Erro ao adicionar o canal');
  });
}

export default {
  getAllChannels,
  getVideo,
  getLastVideo,
  getVideosByChannel,
  deletar,
  adicionar,
};
