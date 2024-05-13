import { EntityState } from '@reduxjs/toolkit';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { ArticleGameType } from './ArticleGame';

export interface GameListSchema extends EntityState<ArticleGameType, number> {
    isListLoading?: boolean;
    isSliderLoading?: boolean;
    errors?: FetchBaseQueryError;
    page: number;
    perPage?: number;
    count: number;
    slider: ArticleGameType[];
}
