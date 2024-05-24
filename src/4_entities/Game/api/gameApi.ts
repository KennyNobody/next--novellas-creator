import { rtkApi } from '5_shared/api/rtkApi';
import { Routes } from '5_shared/api/endpoints';
import { PromoGameAreaType } from '../model/types/PromoGameArea';
import {TaxType} from "../../Tax";
import {ArticleGameType} from "../model/types/ArticleGame";

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
        fetchGameByArea: build.query({
            query: (mode: PromoGameAreaType) => (
                {
                    url: Routes.GAMES_LIST,
                    params: {
                        page: 1,
                        limit: 1,
                        sort: '-id',
                        'filter[promoArea:is]': mode,
                    },
                }
            ),
            providesTags: ['games-area'],
            transformResponse: (response: { data: ArticleGameType[]; }) => response.data,
        }),
    }),
    overrideExisting: false,
});

const useFetchGameByArea = gameApi.useFetchGameByAreaQuery;
const useLazyFetchGameList = gameApi.useLazyFetchGameListQuery;
const useLazyFetchGameSlider = gameApi.useLazyFetchGameSliderQuery;

export {
    gameApi,
    useFetchGameByArea,
    useLazyFetchGameList,
    useLazyFetchGameSlider,
};
