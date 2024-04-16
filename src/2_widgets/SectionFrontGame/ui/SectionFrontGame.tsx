'use client';

import classNames from 'classnames';
import grid from '5_shared/styles/grid.module.scss';
import { Section } from '5_shared/ui/Section/Section';
import { Container } from '5_shared/ui/Container/Container';
import cls from './SectionFrontGame.module.scss';

interface SectionFrontIntroProps {
    className?: string;
}

export const SectionFrontGame = (props: SectionFrontIntroProps) => {
    const {
        // data,
        className,
    } = props;

    return (
        <Section className={classNames(cls.block, className)}>
            <Container>
                <div className={classNames(grid.grid, cls.grid)}>
                    Слайдер игр
                </div>
            </Container>
        </Section>
    );
};
