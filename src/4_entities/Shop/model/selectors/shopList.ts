import { StateSchema } from '5_shared/state/StateSchema';

export const getShopListLoading = (state: StateSchema) => state?.shopList?.isLoading;
export const getShopListPerPage = (state: StateSchema) => state?.shopList?.perPage;
export const getShopListPage = (state: StateSchema) => state?.shopList?.page;
export const getShopListCount = (state: StateSchema) => state?.shopList?.count;
