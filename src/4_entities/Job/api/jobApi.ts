import { rtkApi } from '5_shared/api/rtkApi';
import { Routes } from '5_shared/api/endpoints';

const jobApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        fetchJobList: build.query({
            query: (params) => ({
                url: Routes.JOB_LIST,
                params: {
                    sort: '-id',
                    ...params,
                },
            }),
            providesTags: ['job'],
        }),
    }),
    overrideExisting: false,
});

const useLazyFetchJobList = jobApi.useLazyFetchJobListQuery;

export {
    jobApi,
    useLazyFetchJobList,
};
