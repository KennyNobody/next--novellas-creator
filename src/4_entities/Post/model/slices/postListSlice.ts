import {
    createSlice,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    PayloadAction,
    createEntityAdapter,
} from '@reduxjs/toolkit';
import { StateSchema } from '5_shared/state/StateSchema';
import { ArticlePostType } from '../types/ArticlePost';
// import { postApi } from '../../api/postApi';
import { PostListSchema } from '../types/PostListSchema';
import {fetchPostList} from "../services/fetchPostList/fetchPostList";

const postListAdapter = createEntityAdapter<ArticlePostType>();
postListAdapter.selectId = (item: ArticlePostType) => item.id;

export const getPostList = postListAdapter.getSelectors<StateSchema>(
    (state) => state.postList || postListAdapter.getInitialState(),
);

const initialState: PostListSchema = {
    page: 1,
    perPage: 8,
    // isLoading: false,
    // errors: undefined,
    // category: undefined,
    count: 1,
    ids: [],
    entities: {},
    tempName: 'Не задан',
};

const postListSlice = createSlice({
    name: 'postSlice',
    initialState,
    reducers: {
        // setPage: (state, action: PayloadAction<number>) => {
        //     state.page = action.payload;
        // },
        // setLength: (state, action: PayloadAction<number>) => {
        //     state.count = action.payload;
        // },
        // setPerPage: (state, action: PayloadAction<number>) => {
        //     state.perPage = action.payload;
        // },
        addData: (state, action: any) => {
            postListAdapter.addMany(state, action.payload.data);
        },
        setTempName: (state, action: PayloadAction<string>) => {
            state.tempName = action.payload;
        },
        // replaceData: (state, action: PayloadAction<ArticlePostType[]>) => {
        //     postListAdapter.setAll(state, action.payload);
        // },
        // setPagination: (state, action) => {
        //     const pagination = action.payload;
        //     state.page = pagination.page;
        //     state.count = pagination.pageCount;
        // },
        // toggleCategory: (state, action: PayloadAction<number | undefined>) => {
        //     if (state.category === action.payload) {
        //         state.category = undefined;
        //     } else {
        //         state.category = action.payload;
        //     }
        // },
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    extraReducers: (builder) => {
        // const request = postApi.endpoints.fetchPostList;
        builder
            .addCase(fetchPostList.pending, (state, action) => {
                // // const { replace } = action.meta.arg.originalArgs;
                // if (replace) postListAdapter.removeAll(state);
                state.isLoading = true;
            })
            .addCase(fetchPostList.fulfilled, (state, action) => {
                state.isLoading = false;

                // console.log('Работает');
                // @ts-ignore
                // console.log(action);

                // @ts-ignore
                if (action?.payload?.data) {
                    // @ts-ignore
                    postListAdapter.setAll(state, action.payload.data);
                }
            })
            .addCase(fetchPostList.rejected, (state, action) => {
                state.isLoading = false;
                // state.errors = action.payload;
            });
    },
});

export const {
    reducer: postListReducer,
    actions: postListActions,
} = postListSlice;
