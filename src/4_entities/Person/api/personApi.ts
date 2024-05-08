import { rtkApi } from '5_shared/api/rtkApi';
import { Routes } from '5_shared/api/endpoints';

const personApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        fetchPersonList: build.query({
            query: (params) => ({
                url: Routes.PERSON_LIST,
                params,
            }),
            providesTags: ['person'],
        }),
    }),
    overrideExisting: false,
});

const useLazyFetchPersonList = personApi.useLazyFetchPersonListQuery;

export {
    personApi,
    useLazyFetchPersonList,
};
