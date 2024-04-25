'use client';

import classNames from 'classnames';
import {
    Title,
    TitleMode,
} from '5_shared/ui/Title/Title';
import {
    Section,
    SectionTagType,
    SectionDecorType,
    SectionThemeMode,
} from '5_shared/ui/Section/Section';
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
        <Section
            tag={SectionTagType.SECTION}
            theme={SectionThemeMode.LiGHT}
            decor={SectionDecorType.BOTTOM}
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
