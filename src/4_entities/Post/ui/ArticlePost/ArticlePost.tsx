import { useMemo } from 'react';
import classNames from 'classnames';
import Link from 'next/link';
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
                    <picture className="picture">
                        <img src={data.preview.permalink} alt={data?.title || '#'} />
                    </picture>
                )
            }
            <div className={classNames(cls.main)}>
                {
                    data?.publishedAt
                    && <time>{data.publishedAt.toString()}</time>
                }
                {
                    data?.title
                    && (
                        <h3>
                            { data?.title }
                        </h3>
                    )
                }
                {
                    data?.previewCaption
                    && (
                        <p>{data.previewCaption}</p>
                    )
                }
            </div>
        </Link>
    ), [className, data]);

    return article;
};
