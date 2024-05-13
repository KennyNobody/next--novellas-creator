import Link from 'next/link';
import { useMemo } from 'react';
import classNames from 'classnames';
import { setDate } from '5_shared/libs/helpers/setDate';
import cls from './ArticlePostSmall.module.scss';
import { ArticlePostType } from '../../model/types/ArticlePost';

interface ArticlePostSmallProps {
    className?: string;
    data?: ArticlePostType;
}

export const ArticlePostSmall = (props: ArticlePostSmallProps) => {
    const {
        data,
        className,
    } = props;

    const article = useMemo(() => (
        <Link
            href={`/news/${data?.id}`}
            className={
                classNames(
                    cls.block,
                    className,
                )
            }
        >
            {
                data?.preview?.permalink
                && (
                    <picture className={classNames(cls.picture)}>
                        <img src={data.preview.permalink} alt={data?.title || '#'} />
                    </picture>
                )
            }
            <div className={classNames(cls.content)}>
                {
                    data?.title
                    && (
                        <h3 className={classNames(cls.title)}>
                            { data?.title }
                        </h3>
                    )
                }
                {
                    setDate(data?.date, 'ru')
                    && <time className={classNames(cls.time)}>{ setDate(data?.date, 'ru') }</time>
                }
            </div>
        </Link>
    ), [className, data]);

    return article;
};
