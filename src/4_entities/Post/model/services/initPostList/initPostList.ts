import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '5_shared/state/StateSchema';
// import { PaginationParams, RequestParams } from '5_shared/types/RequestData';
import { postListActions } from '../../slices/postListSlice';
import { getPostListPerPage } from '../../selectors/postList';

export const initPostList = createAsyncThunk<void, any, ThunkConfig<string>>(
    'postList/initPostList',
    async (getData, thunkAPI) => {
        const {
            dispatch,
            getState,
        } = thunkAPI;

        const perPage = getPostListPerPage(getState()) || 1;

        const params = {
        //     [PaginationParams.PAGE]: 1,
        //     [PaginationParams.SIZE]: perPage,
        //     sort: 'publishedAt:DESC',
        //     replace: false,
        //     populate: '*',
        };

        // @ts-ignore
        await getData(params, true).then((response) => {
            console.log(response);
            // // @ts-ignore
            // const { data, meta } = response.data;
            // dispatch(postListActions.addData(data));
            // // @ts-ignore
            // dispatch(postListActions.setPagination(meta.pagination));
        });
    },
);