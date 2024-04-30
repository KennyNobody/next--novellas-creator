'use client';

import {
    useEffect,
} from 'react';
import classNames from 'classnames';
import { useSelector } from 'react-redux';
import { Pagination } from '3_features/Pagination';
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
import cls from './ListPost.module.scss';

interface ListPostsProps {
    className?: string;
}

export const ListPost = (props: ListPostsProps) => {
    const { className } = props;

    const dispatch = useAppDispatch();
    const pageIndex: number = useSelector(getPostListPage) || 1;
    const pageTotal: number = useSelector(getPostListCount) || 1;
    const data: ArticlePostType[] = useSelector(getPostList.selectAll);
    // const isLoading: boolean = useSelector(getPostListLoading) || false;

    const [getData] = useLazyFetchPostList({});

    const togglePage = (newIndex: number) => {
        dispatch(changePageIndex({
            newIndex,
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
            <Pagination
                lastPage={pageTotal}
                currentPage={pageIndex}
                clickEvent={togglePage}
            />
        </div>
    );
};
