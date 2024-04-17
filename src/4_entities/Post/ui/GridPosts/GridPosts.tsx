import classNames from 'classnames';
import grid from '5_shared/styles/grid.module.scss';
import cls from './GridPosts.module.scss';
import { ArticlePost } from '../ArticlePost/ArticlePost';
import { PostArticleType } from '../../model/types/PostArticle';

interface GridPostsProps {
    className?: string;
    data?: (PostArticleType | null)[];
}

export const GridPosts = (props: GridPostsProps) => {
    const {
        data,
        className,
    } = props;

    const content = (
        data
        && data?.length > 0
        && data.map((item: PostArticleType | null, index: number) => {
            return (
                <div
                    key={index}
                    className={
                        classNames(
                            grid['grid__col-1'],
                            grid['grid__col-mob-2'],
                            {
                                [grid['grid__col-x-mob-4']]: item,
                            },
                            {
                                [cls['mobile-hidden']]: !item,
                            },
                        )
                    }
                >
                    {
                        item
                        && (
                            <ArticlePost
                                data={item}
                            />
                        )
                    }
                </div>
            );
        })
    );

    return (
        <div className={classNames(cls.block)}>
            <div className={classNames(grid.grid, cls.grid, className)}>
                { content }
            </div>
        </div>
    );
};
