import { EntityState } from '@reduxjs/toolkit';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { ArticleShopType } from './ArticleShop';

export interface ShopListSchema extends EntityState<ArticleShopType, number> {
    isLoading?: boolean;
    errors?: FetchBaseQueryError;
    page: number;
    perPage?: number;
    count: number;
    category: number | undefined;
}
