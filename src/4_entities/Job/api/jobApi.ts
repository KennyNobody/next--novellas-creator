import { rtkApi } from '5_shared/api/rtkApi';
import { Routes } from '5_shared/api/endpoints';
import { ArticleJobType } from '../model/types/ArticleJob';

const jobApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        fetchJobList: build.query({
            query: (limit: number | null) => ({
                url: Routes.JOB_LIST,
                params: {
                    page: 1,
                    sort: '-id',
                    limit: limit || 50,
                },
            }),
            transformResponse: (response: { data: ArticleJobType[]; }) => response.data,
            providesTags: ['job'],
        }),
    }),
    overrideExisting: false,
});

const useLazyFetchJobList = jobApi.useLazyFetchJobListQuery;
const useFetchJobList = jobApi.useFetchJobListQuery;

export {
    jobApi,
    useFetchJobList,
    useLazyFetchJobList,
};
