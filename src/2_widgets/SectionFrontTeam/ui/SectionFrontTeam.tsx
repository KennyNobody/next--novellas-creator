'use client';

import classNames from 'classnames';
import { Editor } from '5_shared/ui/Editor/Editor';
import { Section } from '5_shared/ui/Section/Section';
import { Title, TitleMode } from '5_shared/ui/Title/Title';
import { Container } from '5_shared/ui/Container/Container';
import cls from './SectionFrontTeam.module.scss';
import { SectionFrontTeamType } from '../model/types/SectionFrontTeam';

interface SectionFrontIntroProps {
    className?: string;
    data: SectionFrontTeamType;
}

export const SectionFrontTeam = (props: SectionFrontIntroProps) => {
    const {
        data,
        className,
    } = props;

    return (
        <Section className={classNames(cls.block, className)}>
            <Container>
                <div className={cls.wrapper}>
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
                </div>
            </Container>
        </Section>
    );
};
