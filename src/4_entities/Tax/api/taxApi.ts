import { rtkApi } from '5_shared/api/rtkApi';
import { Routes } from '5_shared/api/endpoints';
import { TaxType } from '../model/types/Tax';

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
    }),
    overrideExisting: false,
});

const useFetchTeamTaxListQuery = taxApi.useFetchTeamTaxListQuery;
const useLazyFetchTeamTaxList = taxApi.useLazyFetchTeamTaxListQuery;

export {
    taxApi,
    useLazyFetchTeamTaxList,
    useFetchTeamTaxListQuery,
};
