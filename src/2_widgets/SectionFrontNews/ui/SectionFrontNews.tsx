'use client';

import classNames from 'classnames';
import { Section } from '5_shared/ui/Section/Section';
import { Container } from '5_shared/ui/Container/Container';
import cls from './SectionFrontNews.module.scss';
import { SectionFrontNewsType } from '../model/types/SectionFrontNews';

interface SectionFrontIntroProps {
    className?: string;
    data: SectionFrontNewsType;
}

export const SectionFrontNews = (props: SectionFrontIntroProps) => {
    const {
        data,
        className,
    } = props;

    return (
        <Section className={classNames(cls.block, className)}>
            <Container>
                {
                    data?.title && <h2>{ data.title }</h2>
                }
            </Container>
        </Section>
    );
};
