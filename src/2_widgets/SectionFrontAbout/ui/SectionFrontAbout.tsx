'use client';

import classNames from 'classnames';
import {
    Section,
    SectionThemeMode,
} from '5_shared/ui/Section/Section';
import { Editor } from '5_shared/ui/Editor/Editor';
import grid from '5_shared/styles/grid.module.scss';
import { Title, TitleMode } from '5_shared/ui/Title/Title';
import { Container } from '5_shared/ui/Container/Container';
import { RoutesList, RouteSlug } from '5_shared/config/routes';
import { ButtonRegular, ButtonTagType } from '5_shared/ui/ButtonRegular';
import cls from './SectionFrontAbout.module.scss';
import { SectionFrontAboutType } from '../model/types/SectionFrontAbout';

interface SectionFrontIntroProps {
    className?: string;
    data: SectionFrontAboutType;
}

export const SectionFrontAbout = (props: SectionFrontIntroProps) => {
    const {
        data,
        className,
    } = props;

    return (
        <Section
            theme={SectionThemeMode.LiGHT}
            className={classNames(cls.block, className)}
        >
            <Container>
                <div className={classNames(grid.grid, cls.grid)}>
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
                        <ButtonRegular
                            label="Подробнее"
                            tag={ButtonTagType.LINK}
                            className={classNames(cls.button)}
                            path={RoutesList[RouteSlug.ABOUT].url}
                        />
                    </div>
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
                </div>
            </Container>
        </Section>
    );
};
