import classNames from 'classnames';
import cls from './ArticlePost.module.scss';
import { ArticlePostType } from '../../model/types/ArticlePost';

interface ArticlePostProps {
    className?: string;
    data?: ArticlePostType;
}

export const ArticlePost = (props: ArticlePostProps) => {
    const {
        data,
        className,
    } = props;

    if (!data) return <div>Выводим скелетон</div>;

    return (
        <article className={classNames(cls.block, className)}>
            {
                data?.date
                && (
                    <time dateTime={data.date}>
                        { data.date }
                    </time>
                )
            }
            {
                data?.title
                && (
                    <h3>
                        { data.title }
                    </h3>
                )
            }

        </article>
    );
};
