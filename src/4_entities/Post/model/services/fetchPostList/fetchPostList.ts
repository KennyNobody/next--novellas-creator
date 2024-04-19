import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '5_shared/state/StateSchema';
import { RequestParamsType } from '5_shared/types/statamic/RequestParams';
// import { PaginationParams, RequestParams } from '5_shared/types/RequestData';
// import {
//     getPostListPage,
//     getPostListCount,
//     getPostListPerPage,
//     getPostListCategory,
// } from '../../selectors/postList';
import { postListActions } from '../../slices/postListSlice';

interface FetchPostListProps {
    replace: boolean;
    getData: any,
    params: RequestParamsType
}

export const fetchPostList = createAsyncThunk<void, FetchPostListProps, ThunkConfig<string>>(
    'postList/fetchNextPostList',
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
                ? postListActions.replaceData
                : postListActions.addData;
            dispatch(dataMethod(data));
            dispatch(postListActions.setPagination(meta));
        });
    },
);
