'use client';

import classNames from 'classnames';
import { TableDemo } from '3_features/TableDemo';
import { Section, SectionThemeMode } from '5_shared/ui/Section/Section';
import { Container } from '5_shared/ui/Container/Container';
import { Title, TitleMode } from '5_shared/ui/Title/Title';
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
                <Title
                    tag="h1"
                    mode={TitleMode.STRING}
                    text="Текущие вакансии"
                    className={classNames(cls.title)}
                />
                <TableDemo />
            </Container>
        </Section>
    );
};
