import classNames from 'classnames';
import grid from '5_shared/styles/grid.module.scss';
import cls from './GridJob.module.scss';
import { ArticleJob } from '../ArticleJob/ArticleJob';
import { ArticleJobType } from '../../model/types/ArticleJob';

interface GridJobProps {
    className?: string;
    data?: ArticleJobType[];
}

export const GridJob = (props: GridJobProps) => {
    const {
        data,
        className,
    } = props;

    const content = (
        data
        && data?.length > 0
        && data.map((item: ArticleJobType) => (
            <div
                key={item.id}
                className={
                    classNames(grid['grid__col--4'])
                }
            >
                <ArticleJob data={item} />
            </div>
        ))
    );

    return (
        <div className={classNames(cls.block)}>
            <div className={classNames(grid.grid, cls.grid, className)}>
                { content }
            </div>
        </div>
    );
};
