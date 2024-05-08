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
        fetchGameIntroSlider: build.query({
            query: () => (
                {
                    url: Routes.GAMES_LIST,
                    params: {
                        page: 1,
                        limit: 10,
                        sort: '-id',
                        'filter[inIntroSlider:is]': true,
                    },
                }
            ),
            providesTags: ['games-intro'],
        }),
        fetchGameListSlider: build.query({
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
            providesTags: ['games-list'],
        }),
    }),
    overrideExisting: false,
});

const useLazyFetchGameList = gameApi.useLazyFetchGameListQuery;
const useLazyFetchGameIntroSlider = gameApi.useLazyFetchGameIntroSliderQuery;
const useLazyFetchGameListSlider = gameApi.useLazyFetchGameListSliderQuery;

export {
    gameApi,
    useLazyFetchGameList,
    useLazyFetchGameIntroSlider,
    useLazyFetchGameListSlider,
};
