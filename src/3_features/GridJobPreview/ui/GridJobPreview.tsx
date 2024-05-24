'use client';

import classNames from 'classnames';
import {
    GridJob,
    useFetchJobList,
} from '4_entities/Job';
import cls from './GridJobPreview.module.scss';

interface ListPostsProps {
    className?: string;
}

export const GridJobPreview = (props: ListPostsProps) => {
    const { className } = props;

    const { data } = useFetchJobList(6);

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
