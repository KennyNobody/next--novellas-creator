'use client';

import {
    useEffect,
} from 'react';
import classNames from 'classnames';
import { useSelector } from 'react-redux';
import { Pagination } from '3_features/Pagination';
import {
    GridJob,
    initJobList,
    getJobListPage,
    changePageIndex,
    getJobListCount,
    ArticleJobType,
    getJobList,
    useLazyFetchJobList,
} from '4_entities/Job';
import { useAppDispatch } from '5_shared/state/hooks';
import cls from './GridJobPreview.module.scss';

interface ListPostsProps {
    className?: string;
}

export const GridJobPreview = (props: ListPostsProps) => {
    const { className } = props;

    const dispatch = useAppDispatch();
    const pageIndex: number = useSelector(getJobListPage) || 1;
    const pageTotal: number = useSelector(getJobListCount) || 1;
    const data: ArticleJobType[] = useSelector(getJobList.selectAll);
    // const isLoading: boolean = useSelector(getPostListLoading) || false;

    const [getData] = useLazyFetchJobList({});

    const togglePage = (newIndex: number) => {
        dispatch(changePageIndex({
            newIndex,
            getData,
        }));
    };

    useEffect(() => {
        dispatch(initJobList(getData));
    }, []);

    return (
        <div
            className={
                classNames(cls.block, className)
            }
        >
            <GridJob
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
