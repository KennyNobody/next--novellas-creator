'use client';

import classNames from 'classnames';
import {
    Section,
    SectionTagType,
} from '5_shared/ui/Section/Section';
import { Container } from '5_shared/ui/Container/Container';
import cls from './SectionFrontIntro.module.scss';

interface SectionFrontIntroProps {
    className?: string;
}

export const SectionFrontIntro = (props: SectionFrontIntroProps) => {
    const {
        className,
    } = props;

    return (
        <Section
            tag={SectionTagType.SECTION}
            className={classNames(cls.block, className)}
        >
            <Container>
                <div className={classNames(cls.box)}>
                    Слайдер с играми
                </div>
            </Container>
        </Section>
    );
};
