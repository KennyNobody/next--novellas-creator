import { createAsyncThunk } from '@reduxjs/toolkit';
import {
    getJobFilterType,
    getJobFilterProduct,
    getJobFilterLocation,
    getJobFilterDepartment,
} from '3_features/JobFilter';
import { TaxType } from '4_entities/Tax';
import { ThunkConfig } from '5_shared/state/StateSchema';
import { fetchJobList } from '../fetchJobList/fetchJobList';

export const initJobListSorting = createAsyncThunk<void, any, ThunkConfig<string>>(
    'jobList/initJobListSorting',
    (getData, thunkAPI) => {
        const { dispatch, getState } = thunkAPI;

        const type: TaxType[] = getJobFilterType(getState()) || [];
        const product: TaxType[] = getJobFilterProduct(getState()) || [];
        const location: TaxType[] = getJobFilterLocation(getState()) || [];
        const department: TaxType[] = getJobFilterDepartment(getState()) || [];

        const params = {
            limit: 2,
            page: 1,
            sort: '-id',
            typeTax: type.toString(),
            productTax: product.toString(),
            locationTax: location.toString(),
            department: department.toString(),
        };

        dispatch(fetchJobList({
            replace: true,
            getData,
            params,
        }));
    },
);
