export {
    DetailPost,
} from './ui/DetailPost/DetailPost';

export {
    ArticlePost,
} from './ui/ArticlePost/ArticlePost';

export {
    ArticlePostSmall,
} from './ui/ArticlePostSmall/ArticlePostSmall';

export {
    postApi,
    useLazyFetchPostList,
    useLazyFetchPostSlider,
} from './api/postApi';

export {
    getPostList,
    postListReducer,
    postListActions,
} from './model/slices/postSlice';

export {
    fetchPostList,
} from './model/services/fetchPostList/fetchPostList';

export {
    fetchPostSlider,
} from './model/services/fetchPostSlider/fetchPostSlider';

export {
    initPostList,
} from './model/services/initPostList/initPostList';

export {
    changePageIndex,
} from './model/services/changePageIndex/changePageIndex';

export {
    getPostSlider,
    getPostListCount,
    getPostListLoading,
    getPostListPage,
    getPostListCategory,
} from './model/selectors/postList';

export type {
    ArticlePostType,
} from './model/types/ArticlePost';

export type {
    PostListSchema,
} from './model/types/PostListSchema';
