import Link from 'next/link';
import classNames from 'classnames';
import {ReactNode} from 'react';
import {MainIntoType} from 'app/model/types/MainData';
import {Logo, LogoMode,} from '4_entities/Logo';
import {Stack, StackDirectionType, StackSizeType,} from '5_shared/ui/Stack/Stack';
import {Container} from '5_shared/ui/Container/Container';
import {RoutesList, RouteSlug} from '5_shared/config/routes';
import cls from './Header.module.scss';
import {ButtonRegular, ButtonTagType} from "../../../5_shared/ui/ButtonRegular";

interface HeaderProps {
    isFixed?: true;
    isInvert?: true;
    className?: string;
    data: MainIntoType;
    children?: ReactNode;
}

export const Header = (props: HeaderProps) => {
    const {
        data,
        isFixed,
        isInvert,
        className,
        children,
    } = props;

    return (
        <header
            className={
                classNames(
                    cls.block,
                    { [cls['block--light']]: !isInvert },
                    { [cls['block--dark']]: isInvert },
                    { [cls['block--fixed']]: isFixed },
                    className,
                )
            }
        >
            <Container>
                <div className={classNames(cls.main)}>
                    {
                        data?.blockLogo
                        && (
                            <Logo
                                data={data?.blockLogo}
                                mode={isInvert ? LogoMode.LIGHT : LogoMode.DARK}
                            />
                        )
                    }
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
                        {/*<Link*/}
                        {/*    className={classNames(cls.link)}*/}
                        {/*    href={RoutesList[RouteSlug.SHOP].url}*/}
                        {/*>*/}
                        {/*    { RoutesList[RouteSlug.SHOP].caption }*/}
                        {/*</Link>*/}
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
                    <Stack
                        size={StackSizeType.SMALL}
                        direction={StackDirectionType.X}
                    >
                        <ButtonRegular
                            tag={ButtonTagType.LINK}
                            path={RoutesList[RouteSlug.SHOP].url}
                            label={RoutesList[RouteSlug.SHOP].caption}
                        />
                        {/*<LinkIcon*/}
                        {/*    href="#"*/}
                        {/*    iconKey={IconKey.SEARCH}*/}
                        {/*/>*/}
                        {/*<LinkIcon*/}
                        {/*    href="#"*/}
                        {/*    iconKey={IconKey.CART}*/}
                        {/*/>*/}
                    </Stack>
                </div>
                {
                    children && (
                        <div className={classNames(cls.breadcrumbs)}>
                            { children }
                        </div>
                    )
                }
            </Container>
        </header>
    );
};
