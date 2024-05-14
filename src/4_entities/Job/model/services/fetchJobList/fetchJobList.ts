import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '5_shared/state/StateSchema';
import { RequestParamsType } from '5_shared/types/statamic/RequestParams';
import { jobListActions } from '../../slices/jobListSlice';
import { getJobListPage, getJobListPerPage } from '../../selectors/jobList';

export const fetchJobList = createAsyncThunk<void, any, ThunkConfig<string>>(
    'jobList/fetchJobList',
    (props, thunkAPI) => {
        const { dispatch, getState } = thunkAPI;
        const { getData } = props;

        const pageIndex: number = getJobListPage(getState()) || 1;
        const limit: number = getJobListPerPage(getState()) || 6;

        const params: RequestParamsType = {
            limit,
            page: pageIndex,
        };

        getData(params, true).then((response: any) => {
            const { data, meta } = response.data;

            dispatch(jobListActions.replaceData(data));
            dispatch(jobListActions.setPagination(meta));
        });
    },
);
