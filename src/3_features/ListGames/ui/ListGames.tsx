'use client';

import {
    useEffect,
} from 'react';
import classNames from 'classnames';
import { useSelector } from 'react-redux';
import { Pagination } from '3_features/Pagination';
import {
    ArticleGame,
    getGameList,
    initGameList,
    ArticleGameType,
    getGameListPage,
    changePageIndex,
    getGameListCount,
    useLazyFetchGameList,
} from '4_entities/Game';
import grid from '5_shared/styles/grid.module.scss';
import { useAppDispatch } from '5_shared/state/hooks';
import cls from './ListGames.module.scss';

interface ListGamesProps {
    className?: string;
}

export const ListGames = (props: ListGamesProps) => {
    const { className } = props;

    const dispatch = useAppDispatch();
    const pageIndex: number = useSelector(getGameListPage) || 1;
    const pageTotal: number = useSelector(getGameListCount) || 1;
    const data: ArticleGameType[] = useSelector(getGameList.selectAll);
    // const isLoading: boolean = useSelector(getPostListLoading) || false;

    const [getData] = useLazyFetchGameList({});

    const togglePage = (newIndex: number) => {
        dispatch(changePageIndex({
            newIndex,
            getData,
        }));
    };

    useEffect(() => {
        dispatch(initGameList(getData));
    }, []);

    const content = (
        data
        && data?.length > 0
        && data.map((item: ArticleGameType) => (
            <div
                key={item.id}
                className={
                    classNames(
                        grid.grid__col,
                        grid['grid__col--3'],
                    )
                }
            >
                <ArticleGame data={item} />
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
