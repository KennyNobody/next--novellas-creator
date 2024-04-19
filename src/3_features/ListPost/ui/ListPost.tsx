'use client';

import {
    useEffect,
} from 'react';
import classNames from 'classnames';
import { useSelector } from 'react-redux';
import {
    GridPosts,
    initPostList,
    getPostListPage,
    changePageIndex,
    getPostListCount,
    ArticlePostType,
    getPostList,
    useLazyFetchPostList,
} from '4_entities/Post';
import { useAppDispatch } from '5_shared/state/hooks';
import { ListPaginationDirection } from '5_shared/types/base/Pagination';
import cls from './ListPost.module.scss';

interface ListPostsProps {
    className?: string;
}

export const ListPost = (props: ListPostsProps) => {
    const {
        className,
    } = props;

    const dispatch = useAppDispatch();
    const pageIndex: number = useSelector(getPostListPage) || 1;
    const pageTotal: number = useSelector(getPostListCount) || 1;
    const data: ArticlePostType[] = useSelector(getPostList.selectAll);
    // const isLoading: boolean = useSelector(getPostListLoading) || false;

    const [getData] = useLazyFetchPostList({});

    const togglePage = (direction: ListPaginationDirection) => {
        dispatch(changePageIndex({
            direction,
            getData,
        }));
    };

    useEffect(() => {
        dispatch(initPostList(getData));
    }, []);

    return (
        <div
            className={
                classNames(cls.block, className)
            }
        >
            <GridPosts
                data={data}
            />
            <hr />
            <div className={classNames(cls.pagination)}>
                <button
                    type="button"
                    disabled={pageIndex === 1}
                    onClick={() => togglePage(ListPaginationDirection.PREV)}
                >
                    Предыдущая страница
                </button>
                <p>
                    { pageIndex }
                    /
                    { pageTotal }
                </p>
                <button
                    type="button"
                    disabled={pageTotal === pageIndex}
                    onClick={() => togglePage(ListPaginationDirection.NEXT)}
                >
                    Следующая страница
                </button>
            </div>
        </div>
    );
};
