import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '5_shared/state/StateSchema';
import {
    getGameListPerPage,
} from '../../selectors/gameList';
import { fetchGameList } from '../fetchGameList/fetchGameList';

interface ChangePageIndexProps {
    newIndex: number;
    getData: any;
}

export const changePageIndex = createAsyncThunk<void, ChangePageIndexProps, ThunkConfig<string>>(
    'gameList/changePageIndex',
    (props, thunkAPI) => {
        const { getState, dispatch } = thunkAPI;

        const {
            getData,
            newIndex,
        } = props;

        const params = {
            sort: '-id',
            limit: getGameListPerPage(getState()) || 6,
            page: newIndex,
        };

        dispatch(fetchGameList({
            replace: true,
            getData,
            params,
        }));
    },
);
