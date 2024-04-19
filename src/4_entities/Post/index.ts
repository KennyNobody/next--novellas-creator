export {
    GridPosts,
} from './ui/GridPosts/GridPosts';

export type {
    ArticlePostType,
} from './model/types/ArticlePost';

export {
    postApi,
    // useFetchPostById,
    useLazyFetchPostList,
} from './api/postApi';

export {
    getPostList,
    postListReducer,
    postListActions,
} from './model/slices/postListSlice';

export {
    fetchPostList,
} from './model/services/fetchPostList/fetchPostList';

export {
    initPostList,
} from './model/services/initPostList/initPostList';

export {
    changePageIndex,
} from './model/services/changePageIndex/changePageIndex';

export {
    getPostListCount,
    getPostListLoading,
    getPostListPage,
    getPostListCategory,
} from './model/selectors/postList';

export type {
    PostListSchema,
} from './model/types/PostListSchema';
