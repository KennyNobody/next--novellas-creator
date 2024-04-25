'use client';

import classNames from 'classnames';
import { FormSubscription } from '3_features/FormSubscription';
import {
    Section,
    SectionTagType,
    SectionThemeMode,
} from '5_shared/ui/Section/Section';
import { Editor } from '5_shared/ui/Editor/Editor';
import { Title, TitleMode } from '5_shared/ui/Title/Title';
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
            theme={SectionThemeMode.DARK_DECOR}
            className={classNames(cls.block, className)}
        >
            <Container>
                <div className={classNames(cls.wrapper)}>
                    {
                        data?.title
                        && (
                            <Title
                                tag="h2"
                                text={data.title}
                                mode={TitleMode.MARKUP}
                                className={classNames(cls.title)}
                            />
                        )
                    }
                    {
                        data?.content
                        && (
                            <Editor
                                data={data.content}
                                className={classNames(cls.editor)}
                            />
                        )
                    }
                    <FormSubscription />
                </div>
            </Container>
        </Section>
    );
};
