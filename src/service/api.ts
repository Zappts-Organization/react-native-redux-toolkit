import axios from 'axios';

export const baseURL = 'https://api.thedogapi.com/v1/';

export const api = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});
