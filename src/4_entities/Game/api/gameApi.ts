import { rtkApi } from '5_shared/api/rtkApi';
import { Routes } from '5_shared/api/endpoints';

const gameApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        fetchGameList: build.query({
            query: (params) => ({
                url: Routes.GAMES_LIST,
                params: {
                    sort: '-id',
                    ...params,
                },
            }),
            providesTags: ['games'],
        }),
        fetchGameSlider: build.query({
            query: () => (
                {
                    url: Routes.GAMES_LIST,
                    params: {
                        page: 1,
                        limit: 10,
                        sort: '-id',
                        'filter[inFullSlider:is]': true,
                    },
                }
            ),
            providesTags: ['games-slider'],
        }),
    }),
    overrideExisting: false,
});

const useLazyFetchGameList = gameApi.useLazyFetchGameListQuery;
const useLazyFetchGameSlider = gameApi.useLazyFetchGameSliderQuery;

export {
    gameApi,
    useLazyFetchGameList,
    useLazyFetchGameSlider,
};
