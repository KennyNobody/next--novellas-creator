'use client';

import classNames from 'classnames';
import { Section } from '5_shared/ui/Section/Section';
import { Container } from '5_shared/ui/Container/Container';
import cls from './SectionFrontGame.module.scss';

interface SectionFrontIntroProps {
    className?: string;
}

export const SectionFrontGame = (props: SectionFrontIntroProps) => {
    const { className } = props;

    return (
        <Section className={classNames(cls.block, className)}>
            <Container>
                Заголовок об игре
            </Container>
        </Section>
    );
};
