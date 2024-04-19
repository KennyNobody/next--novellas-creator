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
    isLoading: false,
    errors: undefined,
    category: undefined,
    count: 1,
    ids: [],
    entities: {},
};

const postListSlice = createSlice({
    name: 'postListSlice',
    initialState,
    reducers: {
        addData: (state, action: PayloadAction<ArticlePostType[]>) => {
            postListAdapter.addMany(state, action.payload);
        },
        replaceData: (state, action: PayloadAction<ArticlePostType[]>) => {
            postListAdapter.setAll(state, action.payload);
        },
        setPagination: (state, action) => {
            const pagination = action.payload;
            state.page = pagination.current_page;
            state.count = pagination.last_page;
            state.perPage = pagination.per_page;
        },
    },
    extraReducers: (builder) => {
        const request = postApi.endpoints.fetchPostList;

        builder
            .addMatcher(request.matchPending, (state, action) => {
                const { replace } = action.meta.arg.originalArgs;
                if (replace) postListAdapter.removeAll(state);

                state.errors = undefined;
                state.isLoading = true;
            })
            .addMatcher(request.matchFulfilled, (state) => {
                state.isLoading = false;
            })
            .addMatcher(request.matchRejected, (state, action) => {
                state.isLoading = false;
                state.errors = action.payload;
            });
    },
});

export const {
    reducer: postListReducer,
    actions: postListActions,
} = postListSlice;
