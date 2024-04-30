import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '5_shared/state/StateSchema';
import { RequestParamsType } from '5_shared/types/statamic/RequestParams';
import { jobListActions } from '../../slices/jobListSlice';

interface FetchJobListProps {
    replace: boolean;
    getData: any;
    params: RequestParamsType
}

export const fetchJobList = createAsyncThunk<void, FetchJobListProps, ThunkConfig<string>>(
    'jobList/fetchJobList',
    (props, thunkAPI) => {
        const { dispatch } = thunkAPI;

        const {
            params,
            replace,
            getData,
        } = props;

        getData(params, true).then((response: any) => {
            const { data, meta } = response.data;
            const dataMethod = replace
                ? jobListActions.replaceData
                : jobListActions.addData;
            dispatch(dataMethod(data));
            dispatch(jobListActions.setPagination(meta));
        });
    },
);
