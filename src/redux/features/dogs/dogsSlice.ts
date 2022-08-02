import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchDogs } from './dogsThunks';
import { DogState } from './type';

const dogsSlice = createSlice({
  name: 'dogs',
  initialState: {
    breeds: [] as DogState,
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchDogs.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      fetchDogs.fulfilled,
      (state, action: PayloadAction<DogState>) => {
        state.breeds = [...state.breeds, ...action.payload];
        state.loading = false;
      }
    );
    builder.addCase(fetchDogs.rejected, (state) => {
      state.loading = false;
    });
  },
});

export default dogsSlice;
