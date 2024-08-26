import axios from 'axios';

const API_KEY = '45630134-be2c900d0fa84b494dc62f217';
const BASE_URL = 'https://pixabay.com/api';

export const fetchImages = async (query, page = 1, perPage = 20) => {
  const params = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    page: page,
    per_page: perPage,
  };

  try {
    const response = await axios.get(BASE_URL, { params });
    return response.data;
  } catch (error) {
    throw error;
  }
};