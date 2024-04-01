import Link from 'next/link';
import classNames from 'classnames';
import { Routes } from '@/5_shared/config/routes';
import { Container } from '@/5_shared/ui/Container/Container';
import cls from './Header.module.scss';

interface HeaderProps {
    className?: string;
}

export const Header = (props: HeaderProps) => {
    const { className } = props;

    return (
        <header className={classNames(cls.block, className)}>
            <Container>
                <nav>
                    <Link href={Routes.FRONT}>Главная</Link>
                    <Link href={Routes.GAMES}>Игры</Link>
                    <Link href={Routes.SHOP}>Покупки</Link>
                    <Link href={Routes.ABOUT}>О нас</Link>
                    <Link href={Routes.NEWS}>Новости</Link>
                    <Link href={Routes.JOB}>Вакансии</Link>
                    <Link href={Routes.CONTACTS}>Контакты</Link>
                </nav>
            </Container>
        </header>
    );
};
