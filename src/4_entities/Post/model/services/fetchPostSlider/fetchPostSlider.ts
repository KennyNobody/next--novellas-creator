import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '5_shared/state/StateSchema';
import { postListActions } from '../../slices/postSlice';

export const fetchPostSlider = createAsyncThunk<void, any, ThunkConfig<string>>(
    'post/fetchPostSlider',
    (props, thunkAPI) => {
        const { getData } = props;
        const { dispatch } = thunkAPI;

        getData(null, true).then((response: any) => {
            const { data } = response.data;

            if (data) {
                dispatch(postListActions.setSliderData(data));
            }
        });
    },
);
