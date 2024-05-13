import {
    createSlice,
    PayloadAction,
    createEntityAdapter,
} from '@reduxjs/toolkit';
import { StateSchema } from '5_shared/state/StateSchema';
import { ArticlePostType } from '4_entities/Post';
import { postApi } from '../../api/postApi';
import { PostListSchema } from '../types/PostListSchema';

const postListAdapter = createEntityAdapter<ArticlePostType>();
postListAdapter.selectId = (item: ArticlePostType) => item.id;

export const getPostList = postListAdapter.getSelectors<StateSchema>(
    (state) => state.postList || postListAdapter.getInitialState(),
);

const initialState: PostListSchema = {
    page: 1,
    perPage: 3,
    isListLoading: false,
    isSliderLoading: false,
    errors: undefined,
    category: undefined,
    count: 1,
    ids: [],
    entities: {},
    slider: [],
};

const postSlice = createSlice({
    name: 'postSlice',
    initialState,
    reducers: {
        setData: (state, action: PayloadAction<ArticlePostType[]>) => {
            postListAdapter.setAll(state, action.payload);
        },
        setSliderData: (state, action: PayloadAction<ArticlePostType[]>) => {
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
            postListAdapter.removeAll(state);
            Object.assign(state, initialState);
        },
    },
    extraReducers: (builder) => {
        const requestList = postApi.endpoints.fetchPostList;

        builder
            .addMatcher(requestList.matchPending, (state ) => {
                postListAdapter.removeAll(state);

                state.errors = undefined;
                state.isListLoading = true;
            })
            .addMatcher(requestList.matchFulfilled, (state) => {
                state.isListLoading = false;
            })
            .addMatcher(requestList.matchRejected, (state, action) => {
                state.isListLoading = false;
                state.errors = action.payload;
            });
    },
});

export const {
    reducer: postListReducer,
    actions: postListActions,
} = postSlice;
