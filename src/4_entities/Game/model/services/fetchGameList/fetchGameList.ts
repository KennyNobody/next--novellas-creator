import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '5_shared/state/StateSchema';
import { RequestParamsType } from '5_shared/types/statamic/RequestParams';
import {
    getGameListPage,
    getGameListPerPage,
} from '../../selectors/gameList';
import { gameListActions } from '../../slices/gameSlice';

export const fetchGameList = createAsyncThunk<void, any, ThunkConfig<string>>(
    'game/fetchGameList',
    (props, thunkAPI) => {
        const { dispatch, getState } = thunkAPI;
        const { getData } = props;

        const params: RequestParamsType = {
            limit: getGameListPerPage(getState()) || 6,
            page: getGameListPage(getState()) || 1,
        };

        getData(params, true).then((response: any) => {
            const { data, meta } = response.data;

            dispatch(gameListActions.setData(data));
            dispatch(gameListActions.setPagination(meta));
        });
    },
);
