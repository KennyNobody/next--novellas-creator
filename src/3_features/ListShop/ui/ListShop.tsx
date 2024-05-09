'use client';

import {
    useEffect,
} from 'react';
import classNames from 'classnames';
import { useSelector } from 'react-redux';
import {
    GridShop,
    initShopList,
    ArticleShopType,
    getShopList,
    useLazyFetchShopList,
} from '4_entities/Shop';
import { useAppDispatch } from '5_shared/state/hooks';
import cls from './ListShop.module.scss';

interface ListShopProps {
    className?: string;
}

export const ListShop = (props: ListShopProps) => {
    const { className } = props;

    const dispatch = useAppDispatch();
    const data: ArticleShopType[] = useSelector(getShopList.selectAll);
    // const isLoading: boolean = useSelector(getPostListLoading) || false;

    const [getData] = useLazyFetchShopList({});

    useEffect(() => {
        dispatch(initShopList(getData));
    }, []);

    return (
        <div
            className={
                classNames(cls.block, className)
            }
        >
            <GridShop
                data={data}
            />
        </div>
    );
};
