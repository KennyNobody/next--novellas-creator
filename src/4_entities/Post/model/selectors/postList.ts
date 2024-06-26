import { StateSchema } from '5_shared/state/StateSchema';

export const getPostListLoading = (state: StateSchema) => state?.postList?.isListLoading;
export const getPostListPerPage = (state: StateSchema) => state?.postList?.perPage;
export const getPostListPage = (state: StateSchema) => state?.postList?.page;
export const getPostListCount = (state: StateSchema) => state?.postList?.count;
export const getPostListCategory = (state: StateSchema) => state?.postList?.category;
export const getPostSlider = (state: StateSchema) => state?.postList?.slider;
