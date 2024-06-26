import Link from 'next/link';
import classNames from 'classnames';
import { MainIntoType } from 'app/model/types/MainData';
import { FormSubscription } from '3_features/FormSubscription';
import { Socials } from '3_features/Socials';
import { Logo, LogoMode } from '4_entities/Logo';
import { ContactItem } from '4_entities/ContactItem';
import grid from '5_shared/styles/grid.module.scss';
import { Copyright } from '5_shared/ui/Copyright/Copyright';
import { Container } from '5_shared/ui/Container/Container';
import { RoutesList, RouteSlug } from '5_shared/config/routes';
import { SocialsMode } from '3_features/Socials/ui/Socials';
import { ScrollTop } from '3_features/ScrollTop';
import cls from './Footer.module.scss';

interface FooterProps {
    className?: string;
    data: MainIntoType;
}

export const Footer = (props: FooterProps) => {
    const {
        data,
        className,
    } = props;

    const sectionTop = (
        <div className={classNames(cls.top)}>
            <div className={classNames(cls['logo-stack'])}>
                {
                    data?.blockLogo
                    && (
                        <Logo
                            mode={LogoMode.LIGHT}
                            data={data?.blockLogo}
                        />
                    )
                }
                {
                    data?.companyName
                    && (
                        <Copyright text={data?.companyName} />
                    )
                }
            </div>
            <FormSubscription mode="small" />
        </div>
    );

    const sectionMiddle = (
        <div className={classNames(cls.middle)}>
            <nav className={classNames(cls.nav)}>
                <div className={classNames(grid.grid)}>
                    <div
                        className={
                            classNames(
                                grid.grid__col,
                                grid['grid__col--2'],
                                grid['grid__col-mob--2'],
                            )
                        }
                    >
                        <Link
                            href={RoutesList[RouteSlug.GAMES].url}
                            className={classNames(cls.link, cls['link--head'])}
                        >
                            { RoutesList[RouteSlug.GAMES].caption }
                        </Link>
                    </div>
                    <div
                        className={
                            classNames(
                                grid.grid__col,
                                grid['grid__col--2'],
                                grid['grid__col-mob--2'],
                            )
                        }
                    >
                        <Link
                            href={RoutesList[RouteSlug.SHOP].url}
                            className={classNames(cls.link, cls['link--head'])}
                        >
                            { RoutesList[RouteSlug.SHOP].caption }
                        </Link>
                    </div>
                    <div
                        className={
                            classNames(
                                grid.grid__col,
                                grid['grid__col--2'],
                                grid['grid__col-mob--2'],
                            )
                        }
                    >
                        <Link
                            href={RoutesList[RouteSlug.ABOUT].url}
                            className={classNames(cls.link, cls['link--head'])}
                        >
                            { RoutesList[RouteSlug.ABOUT].caption }
                        </Link>
                    </div>
                    <div
                        className={
                            classNames(
                                grid.grid__col,
                                grid['grid__col--2'],
                                grid['grid__col-mob--2'],
                            )
                        }
                    >
                        <Link
                            href={RoutesList[RouteSlug.NEWS].url}
                            className={classNames(cls.link, cls['link--head'])}
                        >
                            { RoutesList[RouteSlug.NEWS].caption }
                        </Link>
                    </div>
                    <div
                        className={
                            classNames(
                                grid.grid__col,
                                grid['grid__col--2'],
                                grid['grid__col-mob--2'],
                            )
                        }
                    >
                        <Link
                            href={RoutesList[RouteSlug.JOB].url}
                            className={classNames(cls.link, cls['link--head'])}
                        >
                            { RoutesList[RouteSlug.JOB].caption }
                        </Link>
                    </div>
                    <div
                        className={
                            classNames(
                                grid.grid__col,
                                grid['grid__col--2'],
                                grid['grid__col-mob--2'],
                            )
                        }
                    >
                        <Link
                            href={RoutesList[RouteSlug.CONTACTS].url}
                            className={classNames(cls.link, cls['link--head'])}
                        >
                            { RoutesList[RouteSlug.CONTACTS].caption }
                        </Link>
                    </div>
                </div>
            </nav>
            {
                data?.socials?.list
                && (
                    <Socials
                        mode={SocialsMode.FOOTER}
                        data={data.socials.list}
                        className={
                            classNames(
                                cls.socials,
                                cls['socials--desktop'],
                            )
                        }
                    />
                )
            }
            <ScrollTop
                className={classNames(cls.scroll)}
            />
        </div>
    );

    const sectionMobile = (
        <div className={classNames(cls.mobile)}>
            {
                data?.socials?.list
                && (
                    <Socials
                        mode={SocialsMode.FOOTER}
                        data={data.socials.list}
                        className={
                            classNames(
                                cls.socials,
                                cls['socials--mobile'],
                            )
                        }
                    />
                )
            }
            {
                data?.contactsSupport
                && (
                    <ContactItem
                        data={data.contactsSupport}
                        className={
                            classNames(
                                cls.support,
                            )
                        }
                    />
                )
            }
        </div>
    );

    const sectionBottom = (
        <div className={classNames(cls.bottom)}>
            <nav className={cls['nav-copyright']}>
                {
                    data?.footerLink?.map((item) => (
                        <a
                            key={item.id}
                            target="_blank"
                            href={item.link}
                            rel="noopener noreferrer nofollow"
                            className={classNames(cls['link-bottom'])}
                        >
                            { item.title }
                        </a>
                    ))
                }
            </nav>
            {
                data?.contactsSupport
                && (
                    <ContactItem
                        data={data.contactsSupport}
                        className={
                            classNames(
                                cls.support,
                                cls['support--desktop'],
                            )
                        }
                    />
                )
            }
        </div>
    );

    return (
        <footer className={classNames(cls.block, className)}>
            <Container>
                { sectionTop }
                { sectionMobile }
                { sectionMiddle }
                { sectionBottom }
            </Container>
        </footer>
    );
};
