import { EntityState } from '@reduxjs/toolkit';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { ArticleJobType } from './ArticleJob';

export interface JobListSchema extends EntityState<ArticleJobType, number> {
    isLoading?: boolean;
    errors?: FetchBaseQueryError;
    page: number;
    perPage?: number;
    count: number;
    category: number | undefined;
}
