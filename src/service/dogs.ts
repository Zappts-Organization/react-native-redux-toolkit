import { api } from './api';
import { DogState } from '../redux/features/dogs/type';

async function getDogs(page: number) {
  try {
    const { data } = await api.get<DogState>(
      `images/search?limit=10&page=${page}`
    );
    return data;
  } catch (error) {
    throw error;
  }
}

export default getDogs;
