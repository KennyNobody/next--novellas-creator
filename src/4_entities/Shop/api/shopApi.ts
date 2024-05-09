import { rtkApi } from '5_shared/api/rtkApi';
import { Routes } from '5_shared/api/endpoints';

const shopApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        fetchShopList: build.query({
            query: (params) => ({
                url: Routes.SHOP_LIST,
                params: {
                    sort: '-id',
                    ...params,
                },
            }),
            providesTags: ['shop'],
        }),
    }),
    overrideExisting: false,
});

const useLazyFetchShopList = shopApi.useLazyFetchShopListQuery;

export {
    shopApi,
    useLazyFetchShopList,
};
