import { createAsyncThunk } from '@reduxjs/toolkit';
import { TaxType } from '4_entities/Tax';
import { ThunkConfig } from '5_shared/state/StateSchema';
import { fetchJobList } from '../fetchJobList/fetchJobList';

export const initJobListSorting = createAsyncThunk<void, any, ThunkConfig<string>>(
    'jobList/initJobListSorting',
    (getData, thunkAPI) => {
        const { dispatch } = thunkAPI;

        const params = {
            limit: 2,
            page: 1,
            sort: '-id',
        };

        dispatch(fetchJobList({
            replace: true,
            getData,
            params,
        }));
    },
);
