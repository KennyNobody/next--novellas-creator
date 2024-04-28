import { ReactNode } from 'react';
import classNames from 'classnames';
import { Container } from '5_shared/ui/Container/Container';
import { Section, SectionTagType } from '5_shared/ui/Section/Section';
import cls from './SectionBreadcrumbs.module.scss';

interface SectionBreadcrumbsProps {
    className?: string;
    children: ReactNode;
}

export const SectionBreadcrumbs = (props: SectionBreadcrumbsProps) => {
    const {
        children,
        className,
    } = props;

    return (
        <Section
            tag={SectionTagType.SECTION}
            className={classNames(cls.block, className)}
        >
            <Container>
                { children }
            </Container>
        </Section>
    );
};
