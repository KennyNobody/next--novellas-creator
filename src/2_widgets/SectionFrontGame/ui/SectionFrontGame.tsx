'use client';

import classNames from 'classnames';
import { Editor } from '5_shared/ui/Editor/Editor';
import grid from '5_shared/styles/grid.module.scss';
import { Section } from '5_shared/ui/Section/Section';
import { Title, TitleMode } from '5_shared/ui/Title/Title';
import { Container } from '5_shared/ui/Container/Container';
import cls from './SectionFrontGame.module.scss';
import { SectionFrontGameType } from '../model/types/SectionFrontGame';

interface SectionFrontIntroProps {
    className?: string;
    data: SectionFrontGameType;
}

export const SectionFrontGame = (props: SectionFrontIntroProps) => {
    const {
        data,
        className,
    } = props;

    return (
        <Section className={classNames(cls.block, className)}>
            <Container>
                <div className={classNames(grid.grid, cls.grid)}>
                    {
                        data?.picture
                        && (
                            <div
                                className={
                                    classNames(
                                        grid.grid__col,
                                        grid['grid__col--7'],
                                    )
                                }
                            >
                                <picture className={classNames(cls.picture)}>
                                    <img src={data?.picture?.permalink} alt="#" />
                                </picture>
                            </div>
                        )
                    }
                    <div
                        className={
                            classNames(
                                grid.grid__col,
                                grid['grid__col--5'],
                            )
                        }
                    >
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
                </div>
            </Container>
        </Section>
    );
};
