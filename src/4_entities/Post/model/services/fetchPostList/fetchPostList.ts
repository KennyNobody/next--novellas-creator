import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '5_shared/state/StateSchema';
import {
    getNewsListLimit,
    getNewsListMode,
    getNewsSortData,
} from '../../selectors/getNewsList';
import { ArticlePostType } from '../../types/ArticlePost';

interface FetchPostListParams {
    personId?: number;
    replaceData?: boolean;
}

export const fetchPostList = createAsyncThunk<
ArticlePostType[],
FetchPostListParams,
ThunkConfig<string>
>(
    'listNews/fetchNewsList',
    async (paramsData, thunkApi) => {
        const {
            extra,
            // getState,
            rejectWithValue,
        } = thunkApi;
        // const { listMode } = paramsData;

        // const limit: number | undefined = getNewsListLimit(getState());
        // const page: number | undefined = getNewsListNum(getState());

        console.log('Запрашиваем данные');

        try {
            // let params: UrlParamsType = {
            //     _limit: limit ? String(limit) : '',
            //     _page: page ? String(page) : '',
            //     _type: mode ? String(mode) : '',
            // };

            const response = await extra.api.get<ArticlePostType[]>(
                'https://api.novellascreator.ru/api/collections/news/entries',
                // {
                //     params,
                // },
            );
            return response.data;
        } catch (e) {
            console.log(e);
            return rejectWithValue('error');
        }
    },
);