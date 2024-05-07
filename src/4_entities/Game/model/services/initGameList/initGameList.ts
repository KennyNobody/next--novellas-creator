import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '5_shared/state/StateSchema';
import { fetchGameList } from '../fetchGameList/fetchGameList';
import { gameListActions } from '../../slices/gameSlice';

export const initGameList = createAsyncThunk<void, any, ThunkConfig<string>>(
    'gameList/initGameList',
    (getData, thunkAPI) => {
        const { dispatch } = thunkAPI;

        dispatch(gameListActions.resetState());
        dispatch(fetchGameList({ getData }));
    },
);
