import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../store';

const getDogsSelector = (state: RootState) => state;

export const getDogs = createSelector(getDogsSelector, (state) => state.dogs);
