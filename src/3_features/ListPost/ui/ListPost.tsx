import {
    useRef,
    useEffect,
    MutableRefObject,
} from 'react';
import classNames from 'classnames';
import { useSelector } from 'react-redux';
import {
    GridPosts,
    initPostList,
    getPostListPage,
    getPostListCount,
    fetchNextPostList,
    getPostListLoading,
    PostArticleType,
    getPostList,
    useLazyFetchPostList,
} from '4_entities/Post';
import { useAppDispatch } from '5_shared/state/hooks';
import { useInfiniteScroll } from '5_shared/libs/hooks/useInfiniteScroll';
import cls from './ListPost.module.scss';

interface ListPostsProps {
    className?: string;
    isPreview?: boolean;
}

export const ListPost = (props: ListPostsProps) => {
    const {
        isPreview,
        className,
    } = props;

    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
    const dispatch = useAppDispatch();
    const pageIndex: number = useSelector(getPostListPage) || 1;
    const pageTotal: number = useSelector(getPostListCount) || 0;
    const data: PostArticleType[] = useSelector(getPostList.selectAll);
    const isLoading: boolean = useSelector(getPostListLoading) || false;

    const [getData] = useLazyFetchPostList({});

    const loadNextPage = () => {
        if (!isLoading && (pageTotal > pageIndex)) {
            dispatch(fetchNextPostList({
                getData,
                replace: false,
            }));
        }
    };

    useEffect(() => {
        dispatch(initPostList(getData));
    }, []);

    useInfiniteScroll({
        triggerRef,
        callback: loadNextPage,
    });

    return (
        <div
            className={
                classNames(cls.block, className)
            }
        >
            <GridPosts
                data={data}
                showSkeleton={isLoading && !data?.length}
                showEnd={!isPreview && !isLoading && pageIndex === pageTotal}
            />
        </div>
    );
};
