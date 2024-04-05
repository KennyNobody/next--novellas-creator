import { configureStore } from '@reduxjs/toolkit';
import { postListReducer } from '4_entities/Post';
import { $api } from '../api/api';

export const makeStore = () => configureStore({
    reducer: {
        postList: postListReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        thunk: {
            extraArgument: {
                api: $api,
            },
        },
    }),
});

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
