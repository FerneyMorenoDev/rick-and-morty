import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { charactersState } from '../../interfaces/features/characters';

const initialState: charactersState = {
    character: {},
    charactersList: [],
    status: 'idle',
    error: null,
};

export const fetchCharacter = createAsyncThunk('characters/fetchCharacter', async (id: string) => {
    const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
    const character = await response.json();
    return character;
});

const charactersSlice = createSlice({
    name: 'characters',
    initialState,
    reducers: {
        addToList(state, action) {
            const isCharacterAdded = state.charactersList.find((character) => character.id === action.payload);
            if (!isCharacterAdded) state.charactersList.push(state.character);
        },
        removeFromList(state, action) {
            state.charactersList = state.charactersList.filter((character) => character.id !== action.payload);
        }
    },
    extraReducers(builder) {
        builder
            .addCase(fetchCharacter.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchCharacter.fulfilled, (state, action) => {
                state.status = 'completed';
                state.character = action.payload;
            })
            .addCase(fetchCharacter.rejected, (state) => {
                state.status = 'failed';
            });
    }
});

export const { addToList, removeFromList } = charactersSlice.actions;

export default charactersSlice.reducer;