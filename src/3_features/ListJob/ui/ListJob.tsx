'use client';

import {
    useEffect,
} from 'react';
import classNames from 'classnames';
import { useSelector } from 'react-redux';
import {
    GridJob,
    initJobList,
    ArticleJobType,
    getJobList,
    useLazyFetchJobList,
} from '4_entities/Job';
import { useAppDispatch } from '5_shared/state/hooks';
import cls from './ListJob.module.scss';

interface ListJobProps {
    className?: string;
}

export const ListJob = (props: ListJobProps) => {
    const { className } = props;

    const dispatch = useAppDispatch();
    const data: ArticleJobType[] = useSelector(getJobList.selectAll);
    // const isLoading: boolean = useSelector(getPostListLoading) || false;

    const [getData] = useLazyFetchJobList({});

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
        </div>
    );
};
