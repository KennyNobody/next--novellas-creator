'use client';

import {useState} from 'react';
import classNames from 'classnames';
import {ButtonIcon, IconKey} from '5_shared/ui/ButtonIcon/ButtonIcon';
import cls from './MenuMobile.module.scss';
import {Logo, LogoMode, LogoType} from "../../../4_entities/Logo";
import Link from "next/link";
import {RoutesList, RouteSlug} from "../../../5_shared/config/routes";
import {ButtonRegular, ButtonTagType} from "../../../5_shared/ui/ButtonRegular";

interface MenuMobileProps {
    logo: LogoType;
    className?: string;
}

export const MenuMobile = (props: MenuMobileProps) => {
    const {
        logo,
        className,
    } = props;

    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <>
            <ButtonIcon
                className={classNames(cls.button, className)}
                clickEvent={() => setIsOpen(!isOpen)}
                iconKey={isOpen ? IconKey.BACK : IconKey.MENU}
            />
            <div
                hidden={!isOpen}
                className={
                    classNames(
                        cls.menu,
                    )
                }
            >
                <div className={classNames(cls.header)}>
                    <Logo
                        data={logo}
                        mode={LogoMode.LIGHT}
                    />
                </div>
                <div className={classNames(cls.main)}>
                    <nav className={classNames(cls.nav)}>
                        <Link
                            className={classNames(cls.link)}
                            href={RoutesList[RouteSlug.FRONT].url}
                        >
                            { RoutesList[RouteSlug.FRONT].caption }
                        </Link>
                        <Link
                            className={classNames(cls.link)}
                            href={RoutesList[RouteSlug.GAMES].url}
                        >
                            { RoutesList[RouteSlug.GAMES].caption }
                        </Link>
                        <Link
                            className={classNames(cls.link)}
                            href={RoutesList[RouteSlug.ABOUT].url}
                        >
                            { RoutesList[RouteSlug.ABOUT].caption }
                        </Link>
                        <Link
                            className={classNames(cls.link)}
                            href={RoutesList[RouteSlug.NEWS].url}
                        >
                            { RoutesList[RouteSlug.NEWS].caption }
                        </Link>
                        <Link
                            className={classNames(cls.link)}
                            href={RoutesList[RouteSlug.JOB].url}
                        >
                            { RoutesList[RouteSlug.JOB].caption }
                        </Link>
                        <Link
                            className={classNames(cls.link)}
                            href={RoutesList[RouteSlug.CONTACTS].url}
                        >
                            { RoutesList[RouteSlug.CONTACTS].caption }
                        </Link>
                    </nav>
                </div>
                <div className={classNames(cls.footer)}>
                    <ButtonRegular
                        label="В магазин"
                        tag={ButtonTagType.LINK}
                        className={cls['link-shop']}
                        path={RoutesList[RouteSlug.SHOP].url}
                    />
                </div>
            </div>
        </>
    );
};
