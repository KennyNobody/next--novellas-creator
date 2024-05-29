'use client';

import {
    useEffect,
} from 'react';
import classNames from 'classnames';
import { useSelector } from 'react-redux';
import {
    getPostList,
    ArticlePost,
    initPostList,
    ArticlePostType,
    ArticlePostSmall,
    useLazyFetchPostList,
} from '4_entities/Post';
import grid from '5_shared/styles/grid.module.scss';
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
            <div className={classNames(cls.scroll)}>
                {
                    data.map((item) => (
                        <div
                            key={item.id}
                            className={
                                classNames(
                                    cls.cell,
                                )
                            }
                        >
                            <ArticlePost data={item} />
                        </div>
                    ))
                }
            </div>
            <div className={classNames(grid.grid, cls.grid)}>
                {
                    data.map((item, index) => {
                        if (index === 0 || index === 1) {
                            return (
                                <div
                                    key={item.id}
                                    className={
                                        classNames(
                                            grid.grid__col,
                                            grid['grid__col--4'],
                                        )
                                    }
                                >
                                    <ArticlePost data={item} />
                                </div>
                            );
                        }
                        return null;
                    })
                }
                <div
                    className={
                        classNames(
                            grid.grid__col,
                            grid['grid__col--4'],
                        )
                    }
                >
                    <div className={classNames(cls.stack)}>
                        {
                            data.map((item, index) => {
                                if (index > 1 && index < 5) {
                                    return (
                                        <ArticlePostSmall
                                            data={item}
                                            key={item.id}
                                        />
                                    );
                                }
                                return null;
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};
