import { createAsyncThunk } from '@reduxjs/toolkit';
import getDogs from '../../service/dogs';

export const fetchDogs = createAsyncThunk(
  'dogs/fetchDogs',
  async (page: number) => {
    const response = await getDogs(page);
    return response;
  }
);
