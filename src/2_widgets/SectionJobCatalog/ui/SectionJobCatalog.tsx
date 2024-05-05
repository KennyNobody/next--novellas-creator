'use client';

import classNames from 'classnames';
import { JobFilter } from '3_features/JobFilter';
import {
    Section,
    SectionTagType,
    SectionDecorType,
    SectionThemeMode,
} from '5_shared/ui/Section/Section';
import { Container } from '5_shared/ui/Container/Container';
import cls from './SectionJobCatalog.module.scss';
import {ListJob} from "../../../3_features/ListJob";

interface SectionJobCatalogProps {
    className?: string;
}

export const SectionJobCatalog = (props: SectionJobCatalogProps) => {
    const { className } = props;

    return (
        <Section
            decor={SectionDecorType.TOP}
            tag={SectionTagType.SECTION}
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
