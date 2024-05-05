import { createAsyncThunk } from '@reduxjs/toolkit';
import {
    getJobFilterDepartment,
    getJobFilterLocation,
    getJobFilterProduct,
    getJobFilterType,
} from '3_features/JobFilter';
import { TaxType } from '4_entities/Tax';
import { ThunkConfig } from '5_shared/state/StateSchema';
import { RequestParamsType } from '5_shared/types/statamic/RequestParams';
import { jobListActions } from '../../slices/jobListSlice';
import { getJobListPage, getJobListPerPage } from '../../selectors/jobList';

export const fetchJobList = createAsyncThunk<void, any, ThunkConfig<string>>(
    'jobList/fetchJobList',
    (props, thunkAPI) => {
        const { dispatch, getState } = thunkAPI;
        const { getData } = props;

        const pageIndex: number = getJobListPage(getState()) || 1;
        const limit: number = getJobListPerPage(getState()) || 6;
        const type: TaxType[] = getJobFilterType(getState()) || [];
        const product: TaxType[] = getJobFilterProduct(getState()) || [];
        const location: TaxType[] = getJobFilterLocation(getState()) || [];
        const department: TaxType[] = getJobFilterDepartment(getState()) || [];

        const params: RequestParamsType = {
            limit,
            page: pageIndex,
        };

        if (type.length > 0) {
            params.typeTax = type.toString();
        }

        if (product.length > 0) {
            params.typeProduct = product.toString();
        }

        if (location.length > 0) {
            params.typeLocation = location.toString();
        }

        if (department.length > 0) {
            params.typeDepartment = department.toString();
        }

        getData(params, true).then((response: any) => {
            const { data, meta } = response.data;

            dispatch(jobListActions.replaceData(data));
            dispatch(jobListActions.setPagination(meta));
        });
    },
);
