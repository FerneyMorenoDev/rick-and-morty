import { createSlice } from '@reduxjs/toolkit';
import { episodesState } from '../interfaces/features/episodes';

const initialState: episodesState = {
    episode: {},
    episodesList: [],
    status: 'idle',
    error: null,
};

const episodesSlice = createSlice({
    name: 'episodes',
    initialState,
    reducers: {}
});

export default episodesSlice.reducer;