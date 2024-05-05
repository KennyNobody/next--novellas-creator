import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '5_shared/state/StateSchema';
import { JobFilterTag } from '../../types/JobFilter';
import { fetchJobFilterOptions } from '../fetchJobFilterOptions/fetchJobFilterOptions';

export const initJobFilterList = createAsyncThunk<void, any, ThunkConfig<string>>(
    'jobFilter/initJobFilter',
    (getData, thunkAPI) => {
        const { dispatch } = thunkAPI;

        dispatch(fetchJobFilterOptions({
            tag: JobFilterTag.TYPE,
            getData,
        }));

        dispatch(fetchJobFilterOptions({
            tag: JobFilterTag.PRODUCT,
            getData,
        }));

        dispatch(fetchJobFilterOptions({
            tag: JobFilterTag.LOCATION,
            getData,
        }));

        dispatch(fetchJobFilterOptions({
            tag: JobFilterTag.DEPARTMENT,
            getData,
        }));
    },
);
