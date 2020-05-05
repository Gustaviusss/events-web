import axios from 'axios';

const api = axios.create({
  baseURL: 'https://apirightbrain.herokuapp.com/',
});

export default api;