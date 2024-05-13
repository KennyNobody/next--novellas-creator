import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '5_shared/state/StateSchema';
import { RequestParamsType } from '5_shared/types/statamic/RequestParams';
import { postListActions } from '../../slices/postSlice';

interface FetchPostListProps {
    replace: boolean;
    getData: any;
    params: RequestParamsType
}

export const fetchPostList = createAsyncThunk<void, FetchPostListProps, ThunkConfig<string>>(
    'postList/fetchNextPostList',
    (props, thunkAPI) => {
        const { dispatch } = thunkAPI;

        const {
            params,
            getData,
        } = props;

        getData(params, true).then((response: any) => {
            const { data, meta } = response.data;
            dispatch(postListActions.setData(data));
            dispatch(postListActions.setPagination(meta));
        });
    },
);
