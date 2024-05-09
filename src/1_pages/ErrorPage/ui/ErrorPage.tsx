import classNames from 'classnames';
import {
    Section,
} from '5_shared/ui/Section/Section';
import { Container } from '5_shared/ui/Container/Container';
import cls from './ErrorPage.module.scss';

interface ErrorPageProps {
    className?: string
}

export const ErrorPage = (props: ErrorPageProps) => {
    const { className } = props;

    return (
        <Section
            className={
                classNames(
                    cls.block,
                    className,
                )
            }
        >
            <Container>
                Упс. Все сломалось
            </Container>
        </Section>
    );
};
