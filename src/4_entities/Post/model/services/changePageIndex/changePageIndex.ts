import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '5_shared/state/StateSchema';
import { ListPaginationDirection } from '5_shared/types/base/Pagination';
import {
    getPostListPage,
    getPostListCount,
    getPostListPerPage,
} from '../../selectors/postList';
import { fetchPostList } from '../fetchPostList/fetchPostList';

interface ChangePageIndexProps {
    direction: ListPaginationDirection;
    getData: any;
}

export const changePageIndex = createAsyncThunk<void, ChangePageIndexProps, ThunkConfig<string>>(
    'postList/changePageIndex',
    (props, thunkAPI) => {
        const { getState, dispatch } = thunkAPI;

        const {
            getData,
            direction,
        } = props;

        const pageIndex = getPostListPage(getState());
        const total = getPostListCount(getState()) || 1;
        const perPage = getPostListPerPage(getState());

        const params = {
            sort: '-id',
            limit: perPage || 6,
            page: pageIndex || 1,
        };

        if (pageIndex < total && direction === ListPaginationDirection.NEXT) {
            params.page = pageIndex + 1;
        } else if (pageIndex > 1 && direction === ListPaginationDirection.PREV) {
            params.page = pageIndex - 1;
        }

        dispatch(fetchPostList({
            replace: true,
            getData,
            params,
        }));
    },
);
