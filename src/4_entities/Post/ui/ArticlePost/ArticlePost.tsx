import Link from 'next/link';
import { useMemo } from 'react';
import classNames from 'classnames';
import { setDate } from '5_shared/libs/helpers/setDate';
import Icon from '5_shared/assets/icons/icon-arrow-next.svg';
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
                    <picture className={classNames(cls.picture)}>
                        <img src={data.preview.permalink} alt={data?.title || '#'} />
                    </picture>
                )
            }
            {
                setDate(data?.date, 'ru')
                && <time className={classNames(cls.time)}>{ setDate(data?.date, 'ru') }</time>
            }
            {
                data?.title
                && (
                    <h3 className={classNames(cls.title)}>
                        { data?.title }
                    </h3>
                )
            }
            {
                data?.previewCaption
                && (
                    <p
                        className={classNames(cls.caption)}
                    >
                        {data.previewCaption}
                    </p>
                )
            }
            <div className={classNames(cls.grow)} />
            <div className={classNames(cls.footer)}>
                <span className={classNames(cls.link)}>
                    Читать
                </span>
                <Icon
                    className={classNames(cls.icon)}
                />
            </div>
        </Link>
    ), [className, data]);

    return article;
};
