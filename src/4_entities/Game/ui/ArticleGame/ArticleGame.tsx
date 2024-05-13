import Link from 'next/link';
import classNames from 'classnames';
import cls from './ArticleGame.module.scss';
import { ArticleGameType } from '../../model/types/ArticleGame';

interface ArticleGameProps {
    className?: string;
    data: ArticleGameType;
}

export const ArticleGame = (props: ArticleGameProps) => {
    const {
        data,
        className,
    } = props;

    const {
        id,
        title,
        preview,
    } = data;

    return (
        <Link
            href={`/games/${id}`}
            className={classNames(cls.block, className)}
        >
            <picture
                className={classNames(cls.picture)}
            >
                {
                    preview?.permalink
                    && <img src={preview.permalink} alt={title || '#'} />
                }
            </picture>
            <span className={classNames(cls.caption)}>
                Визуальная новелла
            </span>
            {
                title
                && (
                    <h3 className={classNames(cls.title)}>
                        { title }
                    </h3>
                )
            }
        </Link>
    );
};
