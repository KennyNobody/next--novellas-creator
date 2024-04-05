import { EntityState } from '@reduxjs/toolkit';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { ArticlePostType } from './ArticlePost';

interface PostListSchema extends EntityState<ArticlePostType, string> {
    isLoading?: boolean;
    errors?: FetchBaseQueryError;
    page: number;
    perPage?: number;
    count: number;
    // category: number | undefined;
}

export {
    type PostListSchema,
};
