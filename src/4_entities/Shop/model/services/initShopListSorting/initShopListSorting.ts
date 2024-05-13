import { createAsyncThunk } from '@reduxjs/toolkit';
// import {
//     getJobFilterType,
//     getJobFilterProduct,
//     getJobFilterLocation,
//     getJobFilterDepartment,
// } from '3_features/JobFilter';
// import { TaxType } from '4_entities/Tax';
import { ThunkConfig } from '5_shared/state/StateSchema';
import { fetchShopList } from '../fetchShopList/fetchShopList';

export const initShopListSorting = createAsyncThunk<void, any, ThunkConfig<string>>(
    'shopList/initShopListSorting',
    (getData, thunkAPI) => {
        const { dispatch } = thunkAPI;

        // const type: TaxType[] = getJobFilterType(getState()) || [];
        // const product: TaxType[] = getJobFilterProduct(getState()) || [];
        // const location: TaxType[] = getJobFilterLocation(getState()) || [];
        // const department: TaxType[] = getJobFilterDepartment(getState()) || [];

        const params = {
            limit: 2,
            page: 1,
            sort: '-id',
            // typeTax: type.toString(),
            // productTax: product.toString(),
            // locationTax: location.toString(),
            // department: department.toString(),
        };

        dispatch(fetchShopList({
            replace: true,
            getData,
            params,
        }));
    },
);
