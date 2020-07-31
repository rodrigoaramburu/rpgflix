const URL_BACKEND = window.location.hostname.includes('localhost')
  ? 'http://localhost:8080'
  : 'https://www.botecodigital.info/react-api/';

export default URL_BACKEND;
