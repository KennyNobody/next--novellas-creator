import { configureStore } from '@reduxjs/toolkit';
import { jobListReducer } from '4_entities/Job';
import { postListReducer } from '4_entities/Post';
import { shopListReducer } from '4_entities/Shop';
import { gameListReducer } from '4_entities/Game';
import { personListReducer } from '4_entities/Person';
import { $api } from '../api/api';
import { rtkApi } from '../api/rtkApi';

export const makeStore = () => configureStore({
    reducer: {
        jobList: jobListReducer,
        shopList: shopListReducer,
        postList: postListReducer,
        gameList: gameListReducer,
        personList: personListReducer,
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
