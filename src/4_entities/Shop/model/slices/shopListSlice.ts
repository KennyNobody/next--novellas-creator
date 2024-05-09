import {
    createSlice,
    PayloadAction,
    createEntityAdapter,
} from '@reduxjs/toolkit';
import { StateSchema } from '5_shared/state/StateSchema';
import { shopApi } from '../../api/shopApi';
import { ShopListSchema } from '../types/ShopListSchema';
import { ArticleShopType } from '../types/ArticleShop';

const shopListAdapter = createEntityAdapter<ArticleShopType>();
shopListAdapter.selectId = (item: ArticleShopType) => item.id;

export const getShopList = shopListAdapter.getSelectors<StateSchema>(
    (state) => state.shopList || shopListAdapter.getInitialState(),
);

const initialState: ShopListSchema = {
    page: 1,
    perPage: 3,
    isLoading: false,
    errors: undefined,
    category: undefined,
    count: 1,
    ids: [],
    entities: {},
};

const shopListSlice = createSlice({
    name: 'shopListSlice',
    initialState,
    reducers: {
        replaceData: (state, action: PayloadAction<ArticleShopType[]>) => {
            shopListAdapter.setAll(state, action.payload);
        },
        setPagination: (state, action) => {
            const pagination = action.payload;
            state.page = pagination.current_page;
            state.count = pagination.last_page;
            state.perPage = pagination.per_page;
        },
        resetState: (state) => {
            shopListAdapter.removeAll(state);
            Object.assign(state, initialState);
        },
    },
    extraReducers: (builder) => {
        const request = shopApi.endpoints.fetchShopList;

        builder
            .addMatcher(request.matchPending, (state) => {
                shopListAdapter.removeAll(state);

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
    reducer: shopListReducer,
    actions: shopListActions,
} = shopListSlice;
