import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '5_shared/state/StateSchema';
import { fetchJobList } from '../fetchJobList/fetchJobList';
import { jobListActions } from '../../slices/jobListSlice';

export const initJobList = createAsyncThunk<void, any, ThunkConfig<string>>(
    'jobList/initJobList',
    (getData, thunkAPI) => {
        const { dispatch } = thunkAPI;

        dispatch(jobListActions.resetState());
        dispatch(fetchJobList({ getData }));
    },
);
