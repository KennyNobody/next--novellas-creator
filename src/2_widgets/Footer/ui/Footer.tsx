import classNames from 'classnames';
import { Container } from '@/5_shared/ui/Container/Container';
import cls from './Footer.module.scss';

interface FooterProps {
    className?: string
}

export const Footer = (props: FooterProps) => {
    const { className } = props;

    return (
        <footer className={classNames(cls.block, className)}>
            <Container>
                Подвал сайта
            </Container>
        </footer>
    );
};
