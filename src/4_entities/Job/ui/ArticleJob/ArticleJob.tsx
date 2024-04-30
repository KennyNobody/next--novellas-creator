import { useMemo } from 'react';
import classNames from 'classnames';
import Link from 'next/link';
import cls from './ArticleJob.module.scss';
import { ArticleJobType } from '../../model/types/ArticleJob';

interface ArticleJobProps {
    className?: string;
    data?: ArticleJobType;
}

export const ArticleJob = (props: ArticleJobProps) => {
    const {
        data,
        className,
    } = props;

    const article = useMemo(() => (
        <Link
            href={`/job/${data?.id}`}
            className={
                classNames(
                    cls.block,
                    className,
                )
            }
        >

            {
                data?.preview_small?.permalink
                && (
                    <picture className="picture">
                        <img src={data.preview_small.permalink} alt={data?.title || '#'} />
                    </picture>
                )
            }
            <div className={classNames(cls.main)}>
                {
                    data?.date
                    && <time>{data.date.toString()}</time>
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
