import classNames from 'classnames';
import { Section } from '5_shared/ui/Section/Section';
import { Container } from '5_shared/ui/Container/Container';
import cls from './SectionSubscribe.module.scss';

interface SectionFrontIntroProps {
    className?: string;
}

export const SectionSubscribe = (props: SectionFrontIntroProps) => {
    const { className } = props;

    return (
        <Section className={classNames(cls.block, className)}>
            <Container>
                Подписка на обновления
            </Container>
        </Section>
    );
};
