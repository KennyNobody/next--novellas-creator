'use client';

import {
    useEffect,
} from 'react';
import classNames from 'classnames';
import { useSelector } from 'react-redux';
import { Pagination } from '3_features/Pagination';
import {
    getPostList,
    ArticlePost,
    initPostList,
    ArticlePostType,
    getPostListPage,
    changePageIndex,
    getPostListCount,
    useLazyFetchPostList,
} from '4_entities/Post';
import grid from '5_shared/styles/grid.module.scss';
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

    const content = (
        data
        && data?.length > 0
        && data.map((item: ArticlePostType) => (
            <div
                key={item.id}
                className={
                    classNames(grid['grid__col--6'])
                }
            >
                <ArticlePost data={item} />
            </div>
        ))
    );

    return (
        <div
            className={
                classNames(cls.block, className)
            }
        >
            <div className={classNames(grid.grid, cls.grid)}>
                { content }
            </div>
            <Pagination
                lastPage={pageTotal}
                currentPage={pageIndex}
                clickEvent={togglePage}
            />
        </div>
    );
};
