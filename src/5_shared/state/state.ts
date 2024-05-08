import { configureStore } from '@reduxjs/toolkit';
import { jobFilterReducer } from '3_features/JobFilter';
import { jobListReducer } from '4_entities/Job';
import { postListReducer } from '4_entities/Post';
import { gameListReducer } from '4_entities/Game';
import { personListReducer } from '4_entities/Person';
import { $api } from '../api/api';
import { rtkApi } from '../api/rtkApi';

export const makeStore = () => configureStore({
    reducer: {
        postList: postListReducer,
        gameList: gameListReducer,
        jobList: jobListReducer,
        personList: personListReducer,
        jobFilter: jobFilterReducer,
        [rtkApi.reducerPath]: rtkApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        thunk: {
            extraArgument: {
                api: $api,
            },
        },
    }).concat(rtkApi.middleware),
});

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
