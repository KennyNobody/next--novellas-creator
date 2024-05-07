import { createAsyncThunk } from '@reduxjs/toolkit';
// import {
//     getJobFilterDepartment,
//     getJobFilterLocation,
//     getJobFilterProduct,
//     getJobFilterType,
// } from '3_features/JobFilter';
// import { TaxType } from '4_entities/Tax';
import { ThunkConfig } from '5_shared/state/StateSchema';
import { RequestParamsType } from '5_shared/types/statamic/RequestParams';
import { gameListActions } from '../../slices/gameSlice';
import { getGameListPage, getGameListPerPage } from '../../selectors/gameList';

export const fetchGameList = createAsyncThunk<void, any, ThunkConfig<string>>(
    'gameList/fetchGameList',
    (props, thunkAPI) => {
        const { dispatch, getState } = thunkAPI;
        const { getData } = props;

        // const type: TaxType[] = getJobFilterType(getState()) || [];
        // const product: TaxType[] = getJobFilterProduct(getState()) || [];
        // const location: TaxType[] = getJobFilterLocation(getState()) || [];
        // const department: TaxType[] = getJobFilterDepartment(getState()) || [];

        const params: RequestParamsType = {
            limit: getGameListPerPage(getState()) || 6,
            page: getGameListPage(getState()) || 1,
        };

        // if (type.length > 0) {
        //     params.typeTax = type.toString();
        // }
        //
        // if (product.length > 0) {
        //     params.typeProduct = product.toString();
        // }
        //
        // if (location.length > 0) {
        //     params.typeLocation = location.toString();
        // }
        //
        // if (department.length > 0) {
        //     params.typeDepartment = department.toString();
        // }

        getData(params, true).then((response: any) => {
            const { data, meta } = response.data;

            console.log(data);

            dispatch(gameListActions.replaceData(data));
            dispatch(gameListActions.setPagination(meta));
        });
    },
);
