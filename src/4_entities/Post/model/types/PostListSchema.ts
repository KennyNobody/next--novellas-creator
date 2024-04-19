import { EntityState } from '@reduxjs/toolkit';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { ArticlePostType } from './ArticlePost';

export interface PostListSchema extends EntityState<ArticlePostType, number> {
    isLoading?: boolean;
    errors?: FetchBaseQueryError;
    page: number;
    perPage?: number;
    count: number;
    category: number | undefined;
}
