import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '5_shared/state/StateSchema';
import { RequestParamsType } from '5_shared/types/statamic/RequestParams';
import { personListActions } from '../../slices/personListSlice';

interface FetchPersonListProps {
    getData: any;
    params: RequestParamsType
}

export const fetchPersonList = createAsyncThunk<void, FetchPersonListProps, ThunkConfig<string>>(
    'personList/fetchPersonList',
    (props, thunkAPI) => {
        const { dispatch } = thunkAPI;

        const {
            params,
            getData,
        } = props;

        getData(params, true).then((response: any) => {
            const { data, meta } = response.data;

            dispatch(personListActions.setData(data));
            dispatch(personListActions.setPagination(meta));
        });
    },
);
