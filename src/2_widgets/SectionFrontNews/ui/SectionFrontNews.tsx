'use client';

import classNames from 'classnames';
import { Section } from '5_shared/ui/Section/Section';
import { Container } from '5_shared/ui/Container/Container';
import cls from './SectionFrontNews.module.scss';

interface SectionFrontIntroProps {
    className?: string;
}

export const SectionFrontNews = (props: SectionFrontIntroProps) => {
    const { className } = props;

    return (
        <Section className={classNames(cls.block, className)}>
            <Container>
                Новости
            </Container>
        </Section>
    );
};
