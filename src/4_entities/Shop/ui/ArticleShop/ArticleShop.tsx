import { useMemo } from 'react';
import classNames from 'classnames';
import Link from 'next/link';
import cls from './ArticleShop.module.scss';
import { ArticleShopType } from '../../model/types/ArticleShop';
import {calculateDiscount} from "../../../../5_shared/libs/helpers/calcDiscount";

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
                data?.picturePreview?.permalink
                && (
                    <picture className={classNames(cls.picture)}>
                        <img src={data.picturePreview.permalink} alt={data?.title || '#'} />
                    </picture>
                )
            }
            <div className={classNames(cls.main)}>
                {
                    data?.date
                    && <time>{data.date.toString()}</time>
                }
                {
                    data?.vendor
                    && (
                        <p className={classNames(cls.vendor)}>
                            { data?.vendor }
                        </p>
                    )
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
                        <p>{data.previewCaption}</p>
                    )
                }
            </div>
            <div className={classNames(cls.footer)}>
                {
                    data?.priceOld
                    && data?.price
                    && (
                        <>
                            <span className={classNames(cls.discount)}>
                                {`- ${calculateDiscount(data.priceOld, data.price)} %`}
                            </span>
                            <span className={classNames(cls.oldPrice)}>
                                {`${data.priceOld} ₽`}
                            </span>
                        </>
                    )
                }
                {
                    data?.price
                    && (
                        <span className={classNames(cls.price)}>
                            { `${data.price} ₽` }
                        </span>
                    )
                }
            </div>
        </Link>
    ), [className, data]);

    return article;
};
