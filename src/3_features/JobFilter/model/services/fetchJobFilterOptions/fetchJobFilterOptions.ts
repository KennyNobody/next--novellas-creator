import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '5_shared/state/StateSchema';
import { JobFilterTag } from '../../types/JobFilter';
import { jobFilterActions } from '../../slices/jobFilterSlice';

interface FetchJobFilterOptionsProps {
    getData: any;
    tag: JobFilterTag;
}

export const fetchJobFilterOptions = createAsyncThunk<void, FetchJobFilterOptionsProps, ThunkConfig<string>>(
    'jobFilter/fetchJobFilterOptions',
    (props, thunkAPI) => {
        const { dispatch } = thunkAPI;

        const {
            tag,
            getData,
        } = props;

        getData(tag, true).then((response: any) => {
            const { data } = response.data;

            dispatch(jobFilterActions.setResultArray({ tag, data }));
        });
    },
);
