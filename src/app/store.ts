import { configureStore } from '@reduxjs/toolkit';
import charactersReducer from '../reducers/charactersSlice';
import episodesReducer from '../reducers/episodesSlice';

// option with combine reducers
// const rootReducer = combineReducers({
//     characters: charactersReducer,
//     episodes: episodesReducer,
// });

// export const store = configureStore({
//     reducer: rootReducer,
// });

export const store = configureStore({
    reducer: {
        characters: charactersReducer,
        episodes: episodesReducer,
    }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;