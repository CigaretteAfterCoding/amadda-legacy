import Axios from 'axios';

export const TOKEN_KEY = 'Authorization';

const devURL = 'http://localhost:';
const prodURL = 'http://3.36.113.129:';
const PORT = 4000;

export const baseURL = process.env.NODE_ENV === 'production' ? prodURL : devURL;
export const apiURL = baseURL + PORT + '/api';

export const amaddaApi = Axios.create({
  baseURL: apiURL,
  withCredentials: true,
  headers: { 'Content-Type': 'application/json' },
});

// export const amaddaApiWithAuth = Axios.create({
//   baseURL: apiURL,
//   headers: {
//     'Content-Type': 'application/json',
//     [TOKEN_KEY]: `Bearer asdfafa`,
//   },
// });
