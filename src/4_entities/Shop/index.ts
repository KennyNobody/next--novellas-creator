export {
    GridShop,
} from './ui/GridShop/GridShop';

export {
    DetailShop,
} from './ui/DetailShop/DetailShop';

export {
    ArticleShop,
} from './ui/ArticleShop/ArticleShop';

export {
    shopApi,
    useLazyFetchShopList,
} from './api/shopApi';

export {
    getShopList,
    shopListReducer,
    shopListActions,
} from './model/slices/shopListSlice';

export {
    fetchShopList,
} from './model/services/fetchShopList/fetchShopList';

export {
    initShopList,
} from './model/services/initJobList/initShopList';

export {
    changePageIndex,
} from './model/services/changePageIndex/changePageIndex';

export {
    getShopListCount,
    getShopListLoading,
    getShopListPage,
} from './model/selectors/shopList';

export {
    type ArticleShopType,
} from './model/types/ArticleShop';

export type {
    ShopListSchema,
} from './model/types/ShopListSchema';
