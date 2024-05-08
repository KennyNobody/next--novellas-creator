'use client';

import classNames from 'classnames';
import { SliderGamesList } from '3_features/SliderGamesList';
import { Section, SectionTagType } from '5_shared/ui/Section/Section';
import cls from './SectionFrontGames.module.scss';

interface SectionFrontGamesProps {
    className?: string;
}

export const SectionFrontGames = ({ className }: SectionFrontGamesProps) => {
    return (
        <Section
            tag={SectionTagType.SECTION}
            className={classNames(cls.block, className)}
        >
            <SliderGamesList />
        </Section>
    );
};
