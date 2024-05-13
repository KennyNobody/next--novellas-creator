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
        fetchPostSlider: build.query({
            query: () => ({
                url: Routes.POSTS_LIST,
                params: {
                    page: 1,
                    limit: 10,
                    // sort: '-id',
                    'filter[inIntroSlider:is]': true,
                },
            }),
            providesTags: ['post-slider'],
        }),
    }),
    overrideExisting: false,
});

const useLazyFetchPostList = postApi.useLazyFetchPostListQuery;
const useLazyFetchPostSlider = postApi.useLazyFetchPostSliderQuery;

export {
    postApi,
    useLazyFetchPostList,
    useLazyFetchPostSlider,
};
