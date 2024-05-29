import React from 'react';
import classNames from 'classnames';
import {Title, TitleMode,} from '5_shared/ui/Title/Title';
import {Section,} from '5_shared/ui/Section/Section';
import {Editor, EditorMode} from '5_shared/ui/Editor/Editor';
import Icon from '5_shared/assets/icons/icon-scroll.svg';
import {Container} from '5_shared/ui/Container/Container';
import cls from './SectionAboutIntro.module.scss';
import {SectionAboutIntroType} from '../model/types/SectionAboutIntro';

interface SectionAboutIntroProps {
    className?: string;
    data: SectionAboutIntroType
}

export const SectionAboutIntro = (props: SectionAboutIntroProps) => {
    const {
        data,
        className,
    } = props;

    return (
        <Section
            style={{
                backgroundImage: `url(${data?.background?.permalink})`,
            }}
            className={
                classNames(
                    cls.block,
                    className,
                )
            }
        >
            <Container className={classNames(cls.container)}>
                {
                    data?.title
                    && (
                        <Title
                            tag="h1"
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
            </Container>
            <Icon className={classNames(cls.icon)} />
        </Section>
    );
};
