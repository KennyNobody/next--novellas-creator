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
    isIntroSliderLoading: false,
    isGamesSliderLoading: false,
    errors: undefined,
    count: 1,
    ids: [],
    entities: {},
    introSlider: [],
    gamesSlider: [],
};

const gameSlice = createSlice({
    name: 'gameListSlice',
    initialState,
    reducers: {
        replaceData: (state, action: PayloadAction<ArticleGameType[]>) => {
            gameListAdapter.setAll(state, action.payload);
        },
        setIntroSliderData: (state, action: PayloadAction<ArticleGameType[]>) => {
            // @ts-ignore
            state.introSlider = action.payload;
        },
        setListSliderData: (state, action: PayloadAction<ArticleGameType[]>) => {
            // @ts-ignore
            state.gamesSlider = action.payload;
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
        const requestIntroSlider = gameApi.endpoints.fetchGameIntroSlider;

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
            .addMatcher(requestIntroSlider.matchPending, (state) => {
                state.errors = undefined;
                state.isIntroSliderLoading = true;
            })
            .addMatcher(requestIntroSlider.matchFulfilled, (state) => {
                state.isIntroSliderLoading = false;
            })
            .addMatcher(requestIntroSlider.matchRejected, (state, action) => {
                state.isIntroSliderLoading = false;
                state.errors = action.payload;
            });
    },
});

export const {
    reducer: gameListReducer,
    actions: gameListActions,
} = gameSlice;
