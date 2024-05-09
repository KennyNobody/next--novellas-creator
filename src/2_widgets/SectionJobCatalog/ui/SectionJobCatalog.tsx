'use client';

import classNames from 'classnames';
import { ListJob } from '3_features/ListJob';
import { JobFilter } from '3_features/JobFilter';
import {
    Section,
    SectionThemeMode,
} from '5_shared/ui/Section/Section';
import { Container } from '5_shared/ui/Container/Container';
import cls from './SectionJobCatalog.module.scss';

interface SectionJobCatalogProps {
    className?: string;
}

export const SectionJobCatalog = (props: SectionJobCatalogProps) => {
    const { className } = props;

    return (
        <Section
            theme={SectionThemeMode.LiGHT}
            className={
                classNames(
                    cls.block,
                    className,
                )
            }
        >
            <Container>
                <JobFilter
                    className={classNames(cls.filter)}
                />
                <ListJob />
            </Container>
        </Section>
    );
};
