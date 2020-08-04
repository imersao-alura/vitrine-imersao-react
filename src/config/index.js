const URL_BACKEND_TOP = window.location.hostname.includes('localhost')
  ? 'http://localhost:3306'
  : 'https://battleflix.herokuapp.com';

export default { URL_BACKEND_TOP };
