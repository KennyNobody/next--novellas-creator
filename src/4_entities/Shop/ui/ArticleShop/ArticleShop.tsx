import { useMemo } from 'react';
import classNames from 'classnames';
import Link from 'next/link';
import cls from './ArticleShop.module.scss';
import { ArticleShopType } from '../../model/types/ArticleShop';

interface ArticleShopProps {
    className?: string;
    data?: ArticleShopType;
}

export const ArticleShop = (props: ArticleShopProps) => {
    const {
        data,
        className,
    } = props;

    const article = useMemo(() => (
        <Link
            href={`/shop/${data?.id}`}
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
