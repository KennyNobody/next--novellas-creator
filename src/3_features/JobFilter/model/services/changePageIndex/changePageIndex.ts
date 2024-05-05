import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '5_shared/state/StateSchema';
import {
    getPostListPerPage,
} from '../../selectors/postList';
import { fetchJobFilterOptions } from '../fetchJobFilterOptions/fetchJobFilterOptions';

interface ChangePageIndexProps {
    newIndex: number;
    getData: any;
}

export const changePageIndex = createAsyncThunk<void, ChangePageIndexProps, ThunkConfig<string>>(
    'postList/changePageIndex',
    (props, thunkAPI) => {
        const { getState, dispatch } = thunkAPI;

        const {
            getData,
            newIndex,
        } = props;

        const perPage = getPostListPerPage(getState());

        const params = {
            sort: '-id',
            limit: perPage || 6,
            page: newIndex,
        };

        dispatch(fetchJobFilterOptions({
            replace: true,
            getData,
            params,
        }));
    },
);
