import classNames from 'classnames';
import grid from '5_shared/styles/grid.module.scss';
import cls from './GridPosts.module.scss';
import { ArticlePost } from '../ArticlePost/ArticlePost';
import { ArticlePostType } from '../../model/types/ArticlePost';

interface GridPostsProps {
    className?: string;
    data?: ArticlePostType[];
}

export const GridPosts = (props: GridPostsProps) => {
    const {
        data,
        className,
    } = props;

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
        <div className={classNames(cls.block)}>
            <div className={classNames(grid.grid, cls.grid, className)}>
                { content }
            </div>
        </div>
    );
};
