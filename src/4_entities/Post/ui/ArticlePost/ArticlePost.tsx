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

    console.log(data);

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
                data?.sectionPostDetail?.preview?.permalink
                && (
                    <picture className="picture">
                        <img src={data.sectionPostDetail.preview.permalink} alt={data?.title || '#'} />
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
                    data?.sectionPostDetail?.previewCaption
                    && (
                        <p>{data.sectionPostDetail?.previewCaption}</p>
                    )
                }
            </div>
        </Link>
    ), [className, data]);

    return article;
};
