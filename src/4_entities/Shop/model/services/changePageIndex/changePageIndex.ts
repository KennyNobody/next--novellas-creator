import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '5_shared/state/StateSchema';
import {
    getShopListPerPage,
} from '../../selectors/shopList';
import { fetchShopList } from '../fetchShopList/fetchShopList';

interface ChangePageIndexProps {
    newIndex: number;
    getData: any;
}

export const changePageIndex = createAsyncThunk<void, ChangePageIndexProps, ThunkConfig<string>>(
    'shopList/changePageIndex',
    (props, thunkAPI) => {
        const { getState, dispatch } = thunkAPI;

        const {
            getData,
            newIndex,
        } = props;

        const perPage = getShopListPerPage(getState());

        const params = {
            sort: '-id',
            limit: perPage || 6,
            page: newIndex,
        };

        dispatch(fetchShopList({
            replace: true,
            getData,
            params,
        }));
    },
);
