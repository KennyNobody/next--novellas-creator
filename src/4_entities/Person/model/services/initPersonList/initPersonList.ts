import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '5_shared/state/StateSchema';
import { fetchPersonList } from '../fetchPersonList/fetchPersonList';

export const initPersonList = createAsyncThunk<void, any, ThunkConfig<string>>(
    'personList/initPersonList',
    (getData, thunkAPI) => {
        const { dispatch } = thunkAPI;

        const params = {
            limit: 10,
            page: 1,
            sort: '-id',
        };

        dispatch(fetchPersonList({
            getData,
            params,
        }));
    },
);
