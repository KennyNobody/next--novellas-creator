'use client';

import classNames from 'classnames';
import { TableJob } from '3_features/TableJob';
import {
    Section,
    SectionThemeMode,
} from '5_shared/ui/Section/Section';
import { Container } from '5_shared/ui/Container/Container';
import cls from './SectionJobCatalog.module.scss';
import {TableDemo} from "../../../3_features/TableDemo";

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
                <TableDemo />
                {/*<TableJob />*/}
            </Container>
        </Section>
    );
};
