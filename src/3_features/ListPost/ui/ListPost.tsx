'use client';

import {
    useRef,
    useEffect,
    MutableRefObject,
} from 'react';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import {
    // GridPosts,
    initPostList,
    getPostListPage,
    getPostListCount,
    // fetchNextPostList,
    getPostListLoading,
    ArticlePostType,
    getPostList,
    useLazyFetchPostList,
} from '4_entities/Post';
import { useAppDispatch } from '5_shared/libs/hooks/useAppDispatch';
// import { useInfiniteScroll } from '5_shared/libs/hooks/useInfiniteScroll';
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

    // const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;
    const dispatch = useDispatch();
    const pageIndex: number = useSelector(getPostListPage) || 1;
    const pageTotal: number = useSelector(getPostListCount) || 0;
    const data: ArticlePostType[] = useSelector(getPostList.selectAll);
    const isLoading: boolean = useSelector(getPostListLoading) || false;

    useEffect(() => {
        console.log('Запрашиваем данные');
    }, []);

    // const loadNextPage = () => {
    //     if (!isLoading && (pageTotal > pageIndex)) {
    //         dispatch(fetchNextPostList({
    //             getData,
    //             replace: false,
    //         }));
    //     }
    // };

    // useEffect(() => {
    //     console.log('Инициализируем список');
    //     // dispatch(initPostList(getData));
    // }, []);

    // useInfiniteScroll({
    //     triggerRef,
    //     callback: loadNextPage,
    // });

    return (
        <div
            className={
                classNames(cls.block, className)
            }
        >
            {/*<GridPosts*/}
            {/*    data={data}*/}
            {/*    showSkeleton={isLoading && !data?.length}*/}
            {/*    showEnd={!isPreview && !isLoading && pageIndex === pageTotal}*/}
            {/*/>*/}
            {/*{!isPreview && <div ref={triggerRef} />}*/}
        </div>
    );
};
