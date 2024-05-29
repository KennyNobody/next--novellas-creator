'use client';

import React from 'react';
import Link from 'next/link';
import classNames from 'classnames';
import { RoutesList, RouteSlug } from '5_shared/config/routes';
import cls from './Breadcrumbs.module.scss';

interface BreadcrumbsProps {
    title?: string;
    slug: RouteSlug;
    className?: string;
}

const Breadcrumbs = (props: BreadcrumbsProps) => {
    const {
        slug,
        title,
        className,
    } = props;

    const middleElement = title ? (
        <Link href={RoutesList[slug].url} className={classNames(cls.link)}>
            {RoutesList[slug].caption}
        </Link>
    ) : (
        <span className={cls.link}>
            {RoutesList[slug].caption}
        </span>
    );

    return (
        <nav className={classNames(cls.block, className)}>
            <Link
                className={classNames(cls.link)}
                href={RoutesList[RouteSlug.FRONT].url}
            >
                { RoutesList[RouteSlug.FRONT].caption }
            </Link>
            <span className={classNames(cls.line)} />
            { middleElement }
            {title && <span className={classNames(cls.line)} />}
            {title && <span className={classNames(cls.link)}>{title}</span>}
        </nav>
    );
};

export {
    Breadcrumbs,
};
