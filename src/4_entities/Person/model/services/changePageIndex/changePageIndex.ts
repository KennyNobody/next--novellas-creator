import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '5_shared/state/StateSchema';
import { getPersonListPerPage } from '../../selectors/personList';
import { fetchPersonList } from '../fetchPersonList/fetchPersonList';

interface ChangePageIndexProps {
    newIndex: number;
    getData: any;
}

export const changePageIndex = createAsyncThunk<void, ChangePageIndexProps, ThunkConfig<string>>(
    'personList/changePageIndex',
    (props, thunkAPI) => {
        const { getState, dispatch } = thunkAPI;

        const {
            getData,
            newIndex,
        } = props;

        const perPage = getPersonListPerPage(getState());

        const params = {
            sort: '-id',
            limit: perPage || 6,
            page: newIndex,
        };

        dispatch(fetchPersonList({
            getData,
            params,
        }));
    },
);
