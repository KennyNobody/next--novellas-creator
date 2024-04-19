import { rtkApi } from '5_shared/api/rtkApi';
import { Routes } from '5_shared/api/endpoints';

const postApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        fetchPostList: build.query({
            query: (params) => ({
                url: Routes.POSTS_LIST,
                params,
            }),
            providesTags: ['post'],
        }),
    }),
    overrideExisting: false,
});

const useLazyFetchPostList = postApi.useLazyFetchPostListQuery;

export {
    postApi,
    useLazyFetchPostList,
};
