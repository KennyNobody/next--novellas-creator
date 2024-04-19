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

        const perPage = getPostListPerPage(getState()) || 1;
        const pageIndex = getPostListPage(getState()) || 1;
        const total = getPostListCount(getState()) || 1;
        // const category = getPostListCategory(getState());
        // const listLength = getPostListCount(getState());
        // const pageNumber = listIndex === listLength ? listIndex : listIndex + 1;

        const params = {
            limit: perPage || 6,
            sort: '-id',
            page: pageIndex,
        };

        if (
            pageIndex < total
            && direction === ListPaginationDirection.NEXT
        ) {
            params.page = pageIndex + 1;
        } else if (
            pageIndex > 1
            && direction === ListPaginationDirection.PREV
        ) {
            params.page = pageIndex - 1;
        }

        dispatch(fetchPostList({
            replace: true,
            getData,
            params,
        }));
    },
);
