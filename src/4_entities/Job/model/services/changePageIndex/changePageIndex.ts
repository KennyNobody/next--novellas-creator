import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '5_shared/state/StateSchema';
import {
    getJobListPerPage,
} from '../../selectors/jobList';
import { fetchJobList } from '../fetchJobList/fetchJobList';

interface ChangePageIndexProps {
    newIndex: number;
    getData: any;
}

export const changePageIndex = createAsyncThunk<void, ChangePageIndexProps, ThunkConfig<string>>(
    'jobList/changePageIndex',
    (props, thunkAPI) => {
        const { getState, dispatch } = thunkAPI;

        const {
            getData,
            newIndex,
        } = props;

        const perPage = getJobListPerPage(getState());

        const params = {
            sort: '-id',
            limit: perPage || 6,
            page: newIndex,
        };

        dispatch(fetchJobList({
            replace: true,
            getData,
            params,
        }));
    },
);
