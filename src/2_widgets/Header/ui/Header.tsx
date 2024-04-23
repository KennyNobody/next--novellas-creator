import Link from 'next/link';
import classNames from 'classnames';
import {IconKey, LinkIcon,} from '5_shared/ui/LinkIcon/LinkIcon';
import {Routes} from '5_shared/config/routes';
import {Stack, StackDirectionType, StackSizeType} from '5_shared/ui/Stack/Stack';
import {Container} from '5_shared/ui/Container/Container';
import cls from './Header.module.scss';

interface HeaderProps {
    isFixed?: true;
    isInvert?: true;
    className?: string;
}

export const Header = (props: HeaderProps) => {
    const {
        isFixed,
        isInvert,
        className,
    } = props;

    return (
        <header
            className={
                classNames(
                    cls.block,
                    { [cls['block--fixed']]: isFixed },
                    className,
                )
            }
        >
            <Container>
                <div className={classNames(cls.wrapper)}>
                    <nav className={classNames(cls.nav)}>
                        <Link className={classNames(cls.link)} href={Routes.FRONT}>Главная</Link>
                        <Link className={classNames(cls.link)} href={Routes.GAMES}>Игры</Link>
                        <Link className={classNames(cls.link)} href={Routes.SHOP}>Покупки</Link>
                        <Link className={classNames(cls.link)} href={Routes.ABOUT}>О нас</Link>
                        <Link className={classNames(cls.link)} href={Routes.NEWS}>Новости</Link>
                        <Link className={classNames(cls.link)} href={Routes.JOB}>Вакансии</Link>
                        <Link className={classNames(cls.link)} href={Routes.CONTACTS}>Контакты</Link>
                    </nav>
                    <Stack
                        size={StackSizeType.SMALL}
                        direction={StackDirectionType.X}
                    >
                        <LinkIcon
                            href="#"
                            iconKey={IconKey.SEARCH}
                        />
                        <LinkIcon
                            href="#"
                            iconKey={IconKey.LOGIN}
                        />
                        <LinkIcon
                            href="#"
                            iconKey={IconKey.CART}
                        />
                    </Stack>

                </div>
            </Container>
        </header>
    );
};
