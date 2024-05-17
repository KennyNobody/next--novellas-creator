'use client';

import classNames from 'classnames';
import { SliderGamesList } from '3_features/SliderGamesList';
import { Section, SectionThemeMode } from '5_shared/ui/Section/Section';
import cls from './SectionFrontGames.module.scss';

interface SectionFrontGamesProps {
    className?: string;
}

export const SectionFrontGames = ({ className }: SectionFrontGamesProps) => (
    <Section
        theme={SectionThemeMode.DARK_DECOR}
        className={classNames(cls.block, className)}
    >
        <SliderGamesList />
    </Section>
);
