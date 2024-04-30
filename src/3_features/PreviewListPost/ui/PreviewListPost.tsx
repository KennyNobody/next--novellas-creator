'use client';

import {
    useEffect,
} from 'react';
import classNames from 'classnames';
import { useSelector } from 'react-redux';
import {
    GridPosts,
    initPostList,
    ArticlePostType,
    getPostList,
    useLazyFetchPostList,
} from '4_entities/Post';
import { useAppDispatch } from '5_shared/state/hooks';
import cls from './PreviewListPost.module.scss';

interface PreviewListPostProps {
    className?: string;
}

export const PreviewListPost = (props: PreviewListPostProps) => {
    const { className } = props;

    const dispatch = useAppDispatch();
    const data: ArticlePostType[] = useSelector(getPostList.selectAll);
    // const isLoading: boolean = useSelector(getPostListLoading) || false;

    const [getData] = useLazyFetchPostList({});

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
        </div>
    );
};
