import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '5_shared/state/StateSchema';
import { fetchShopList } from '../fetchShopList/fetchShopList';
import { shopListActions } from '../../slices/shopListSlice';

export const initShopList = createAsyncThunk<void, any, ThunkConfig<string>>(
    'shopList/initShopList',
    (getData, thunkAPI) => {
        const { dispatch } = thunkAPI;

        dispatch(shopListActions.resetState());
        dispatch(fetchShopList({ getData }));
    },
);
