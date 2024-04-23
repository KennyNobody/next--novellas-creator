'use client';

import classNames from 'classnames';
import {
    Section,
    SectionTagType,
} from '5_shared/ui/Section/Section';
import { Container } from '5_shared/ui/Container/Container';
import cls from './SectionSubscribe.module.scss';
import { SectionSubscribeType } from '../model/types/SectionSubscribe';

interface SectionFrontIntroProps {
    className?: string;
    data: SectionSubscribeType;
}

export const SectionSubscribe = (props: SectionFrontIntroProps) => {
    const {
        data,
        className,
    } = props;

    return (
        <Section
            tag={SectionTagType.SECTION}
            className={classNames(cls.block, className)}
        >
            <Container>
                {
                    data?.title && <h2>{ data.title }</h2>
                }
                {
                    data?.content && <div>{ data.content }</div>
                }
                {
                    data?.agreementText && <div>{ data.agreementText }</div>
                }
                {
                    data.buttonText
                }
            </Container>
        </Section>
    );
};
