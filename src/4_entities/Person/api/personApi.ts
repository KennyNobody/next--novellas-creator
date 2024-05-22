import { rtkApi } from '5_shared/api/rtkApi';
import { Routes } from '5_shared/api/endpoints';
import { ArticlePersonType } from '../model/types/ArticlePerson';

const personApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        fetchPersonList: build.query({
            query: (param: string) => ({
                url: Routes.PERSON_LIST,
                params: {
                    page: 1,
                    sort: '-id',
                    perPage: 50,
                    'filter[team-department:contains]': param,
                },
            }),
            transformResponse: (response: { data: ArticlePersonType[]; }) => response.data,
            providesTags: ['person'],
        }),
    }),
    overrideExisting: false,
});

const useFetchPersonList = personApi.useFetchPersonListQuery;
const useLazyFetchPersonList = personApi.useLazyFetchPersonListQuery;

export {
    personApi,
    useFetchPersonList,
    useLazyFetchPersonList,
};
