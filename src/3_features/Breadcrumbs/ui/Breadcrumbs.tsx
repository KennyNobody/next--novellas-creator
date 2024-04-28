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

    const middleEl = () => {
        if (!title) {
            return (
                <span
                    className={classNames(cls.link)}
                >
                    {RoutesList[slug].caption}
                </span>
            );
        }

        return (
            <Link
                className={classNames(cls.link)}
                href={RoutesList[slug].url}
            >
                {RoutesList[slug].caption}
            </Link>
        );
    };

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
        <nav className={classNames(className)}>
            <Link
                className={classNames(cls.link)}
                href={RoutesList[RouteSlug.FRONT].url}
            >
                { RoutesList[RouteSlug.FRONT].caption }
            </Link>
            {' - '}
            { middleElement }
            {title && ' - '}
            {title && <span className={classNames(cls.link)}>{title}</span>}
        </nav>
    );
};

export {
    Breadcrumbs,
};
