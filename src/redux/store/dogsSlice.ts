import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchDogs } from './dogsThunks';
import { DogData } from './type';

const dogsSlice = createSlice({
  name: 'dogs',
  initialState: {
    breeds: [] as DogData[],
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchDogs.pending, (state) => {
      state.loading = false;
    });
    builder.addCase(
      fetchDogs.fulfilled,
      (state, action: PayloadAction<DogData[]>) => {
        state.breeds = [...state.breeds, ...action.payload];
        state.loading = true;
      }
    );
    builder.addCase(fetchDogs.rejected, (state) => {
      state.loading = false;
    });
  },
});

export default dogsSlice;
