'use client';

import classNames from 'classnames';
import { Section, SectionDecorType, SectionTagType } from '5_shared/ui/Section/Section';
import { Container } from '5_shared/ui/Container/Container';
import cls from './SectionFrontNews.module.scss';
import { SectionFrontNewsType } from '../model/types/SectionFrontNews';
import { Title, TitleMode } from '../../../5_shared/ui/Title/Title';

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
        <Section
            isInvert
            tag={SectionTagType.SECTION}
            decor={SectionDecorType.FULL}
            className={classNames(cls.block, className)}
        >
            <Container>
                {
                    data?.title
                    && <Title tag="h2" text={data.title} mode={TitleMode.MARKUP} />
                }
            </Container>
        </Section>
    );
};
