// imports, thunk action creator & slice omitted

import { RootState } from '../../store';

export const getDogs = (state: RootState) => state.dogs;
