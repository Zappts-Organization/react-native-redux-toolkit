import { DogState } from '../redux/features/dogs/type';
import { api } from './api';

async function getDogs(page: number) {
  try {
    const { data } = await api.get<DogState>(
      `images/search?limit=5&page=${page}`
    );
    return data;
  } catch (error) {
    throw error;
  }
}

export default getDogs;
