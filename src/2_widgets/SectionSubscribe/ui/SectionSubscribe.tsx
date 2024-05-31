'use client';

import classNames from 'classnames';
import {
    FormSubscription,
} from '3_features/FormSubscription';
import { Title, TitleMode } from '5_shared/ui/Title/Title';
import { Container } from '5_shared/ui/Container/Container';
import { Editor, EditorMode } from '5_shared/ui/Editor/Editor';
import { Section, SectionThemeMode } from '5_shared/ui/Section/Section';
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
                                mode={EditorMode.INVERTED}
                                className={classNames(cls.editor)}
                            />
                        )
                    }
                    <FormSubscription mode="large" />
                </div>
            </Container>
        </Section>
    );
};
