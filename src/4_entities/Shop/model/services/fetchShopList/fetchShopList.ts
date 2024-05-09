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
import { shopListActions } from '../../slices/shopListSlice';
import { getShopListPage, getShopListPerPage } from '../../selectors/shopList';

export const fetchShopList = createAsyncThunk<void, any, ThunkConfig<string>>(
    'shopList/fetchShopList',
    (props, thunkAPI) => {
        const { dispatch, getState } = thunkAPI;
        const { getData } = props;

        const pageIndex: number = getShopListPage(getState()) || 1;
        const limit: number = getShopListPerPage(getState()) || 4;
        // const type: TaxType[] = getJobFilterType(getState()) || [];
        // const product: TaxType[] = getJobFilterProduct(getState()) || [];
        // const location: TaxType[] = getJobFilterLocation(getState()) || [];
        // const department: TaxType[] = getJobFilterDepartment(getState()) || [];

        const params: RequestParamsType = {
            limit,
            page: pageIndex,
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

            dispatch(shopListActions.replaceData(data));
            dispatch(shopListActions.setPagination(meta));
        });
    },
);
