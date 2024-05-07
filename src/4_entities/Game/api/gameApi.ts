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
    }),
    overrideExisting: false,
});

const useLazyFetchGameList = gameApi.useLazyFetchGameListQuery;
const useLazyFetchGameIntroSlider = gameApi.useLazyFetchGameIntroSliderQuery;

export {
    gameApi,
    useLazyFetchGameList,
    useLazyFetchGameIntroSlider,
};
