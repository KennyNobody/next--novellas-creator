import {
    createSlice,
    PayloadAction,
    createEntityAdapter,
} from '@reduxjs/toolkit';
import { StateSchema } from '5_shared/state/StateSchema';
import { gameApi } from '../../api/gameApi';
import { GameListSchema } from '../types/GameListSchema';
import { ArticleGameType } from '../types/ArticleGame';

const gameListAdapter = createEntityAdapter<ArticleGameType>();
gameListAdapter.selectId = (item: ArticleGameType) => item.id;

export const getGameList = gameListAdapter.getSelectors<StateSchema>(
    (state) => state.gameList || gameListAdapter.getInitialState(),
);

const initialState: GameListSchema = {
    page: 1,
    perPage: 3,
    isListLoading: false,
    isSliderLoading: false,
    errors: undefined,
    count: 1,
    ids: [],
    entities: {},
    slider: [],
};

const gameSlice = createSlice({
    name: 'gameSlice',
    initialState,
    reducers: {
        setData: (state, action: PayloadAction<ArticleGameType[]>) => {
            gameListAdapter.setAll(state, action.payload);
        },
        setSliderData: (state, action: PayloadAction<ArticleGameType[]>) => {
            // @ts-ignore
            state.slider = action.payload;
        },
        setPagination: (state, action) => {
            const pagination = action.payload;
            state.page = pagination.current_page;
            state.count = pagination.last_page;
            state.perPage = pagination.per_page;
        },
        resetState: (state) => {
            gameListAdapter.removeAll(state);
            Object.assign(state, initialState);
        },
    },
    extraReducers: (builder) => {
        const requestList = gameApi.endpoints.fetchGameList;
        const requestSlider = gameApi.endpoints.fetchGameList;

        builder
            // Main list
            .addMatcher(requestList.matchPending, (state) => {
                gameListAdapter.removeAll(state);

                state.errors = undefined;
                state.isListLoading = true;
            })
            .addMatcher(requestList.matchFulfilled, (state) => {
                state.isListLoading = false;
            })
            .addMatcher(requestList.matchRejected, (state, action) => {
                state.isListLoading = false;
                state.errors = action.payload;
            })
            // Intro slider
            .addMatcher(requestSlider.matchPending, (state) => {
                state.errors = undefined;
                state.isSliderLoading = true;
            })
            .addMatcher(requestSlider.matchFulfilled, (state) => {
                state.isSliderLoading = false;
            })
            .addMatcher(requestSlider.matchRejected, (state, action) => {
                state.isSliderLoading = false;
                state.errors = action.payload;
            });
    },
});

export const {
    reducer: gameListReducer,
    actions: gameListActions,
} = gameSlice;
