import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '5_shared/state/StateSchema';
import { gameListActions } from '../../slices/gameSlice';

export const fetchGameListSlider = createAsyncThunk<void, any, ThunkConfig<string>>(
    'gameList/fetchGameListSlider',
    (props, thunkAPI) => {
        const { getData } = props;
        const { dispatch } = thunkAPI;

        getData(null, true).then((response: any) => {
            const { data } = response.data;

            if (data) {
                dispatch(gameListActions.setListSliderData(data));
            }
        });
    },
);
