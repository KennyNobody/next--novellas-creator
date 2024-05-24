import { rtkApi } from '5_shared/api/rtkApi';
import { Routes } from '5_shared/api/endpoints';
import { TaxType } from '../model/types/Tax';

enum JobVacancyMode {
    PRODUCT = Routes.JOB_TAX_PRODUCT,
    LOCATION = Routes.JOB_TAX_LOCATION,
    DEPARTMENT = Routes.JOB_TAX_DEPARTMENT,
}

const taxApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        fetchTeamTaxList: build.query({
            query: () => ({
                url: Routes.TEAM_TAX_DEPARTMENT,
                params: {
                    page: 1,
                    sort: '-id',
                    perPage: 50,
                },
            }),
            providesTags: ['teamTax'],
            transformResponse: (response: { data: TaxType[]; }) => response.data,
        }),
        fetchJobTaxList: build.query({
            query: (mode: JobVacancyMode) => ({
                url: mode,
                params: {
                    page: 1,
                    sort: '-id',
                    perPage: 50,
                },
            }),
            providesTags: ['teamTax'],
            transformResponse: (response: { data: TaxType[]; }) => response.data,
        }),
    }),
    overrideExisting: false,
});

const useFetchJobTaxListQuery = taxApi.useFetchJobTaxListQuery;
const useFetchTeamTaxListQuery = taxApi.useFetchTeamTaxListQuery;
const useLazyFetchTeamTaxList = taxApi.useLazyFetchTeamTaxListQuery;

export {
    taxApi,
    JobVacancyMode,
    useFetchJobTaxListQuery,
    useLazyFetchTeamTaxList,
    useFetchTeamTaxListQuery,
};
