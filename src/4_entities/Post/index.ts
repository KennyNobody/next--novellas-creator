export {
    type PostListSchema,
} from './model/types/PostListSchema';

export {
    type ArticlePostType,
} from './model/types/ArticlePost';

export {
    initPostList,
} from './model/services/initPostList/initPostList';

export {
    getPostList,
    postListActions,
    postListReducer,
} from './model/slices/postListSlice';

export {
    getPostListPage,
    getPostListCount,
    getPostListLoading,
    getPostListPerPage,
} from './model/selectors/postList';
