import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '5_shared/state/StateSchema';
import { fetchPostList } from '../fetchPostList/fetchPostList';

export const initPostList = createAsyncThunk<void, any, ThunkConfig<string>>(
    'postList/initPostList',
    (getData, thunkAPI) => {
        const { dispatch } = thunkAPI;

        const params = {
            limit: 2,
            page: 1,
            sort: '-id',
        };

        dispatch(fetchPostList({
            replace: true,
            getData,
            params,
        }));
    },
);
