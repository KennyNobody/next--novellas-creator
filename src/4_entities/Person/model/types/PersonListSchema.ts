import { EntityState } from '@reduxjs/toolkit';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { ArticlePersonType } from './ArticlePerson';

export interface PersonListSchema extends EntityState<ArticlePersonType, number> {
    isLoading?: boolean;
    errors?: FetchBaseQueryError;
    page: number;
    perPage?: number;
    count: number;
}
