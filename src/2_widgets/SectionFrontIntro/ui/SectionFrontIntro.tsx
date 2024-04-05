'use client';

import classNames from 'classnames';
import { Section } from '5_shared/ui/Section/Section';
import { Container } from '5_shared/ui/Container/Container';
import cls from './SectionFrontIntro.module.scss';

interface SectionFrontIntroProps {
    className?: string;
    title: string;
}

export const SectionFrontIntro = (props: SectionFrontIntroProps) => {
    const {
        title,
        className,
    } = props;

    return (
        <Section className={classNames(cls.block, className)}>
            <Container>
                { title }
            </Container>
        </Section>
    );
};
