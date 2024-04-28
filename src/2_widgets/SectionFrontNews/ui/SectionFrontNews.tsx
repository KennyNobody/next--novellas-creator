'use client';

import classNames from 'classnames';
import {Title, TitleMode,} from '5_shared/ui/Title/Title';
import {Section, SectionDecorType, SectionTagType, SectionThemeMode,} from '5_shared/ui/Section/Section';
import {Toolbar} from '5_shared/ui/Toolbar/Toolbar';
import {Container} from '5_shared/ui/Container/Container';
import cls from './SectionFrontNews.module.scss';
import {SectionFrontNewsType} from '../model/types/SectionFrontNews';
import {ButtonRegular, ButtonTagType} from "../../../5_shared/ui/ButtonRegular";
import {Routes} from "../../../5_shared/api/endpoints";
import {RoutesList, RouteSlug} from "../../../5_shared/config/routes";

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
                    && (
                        <Toolbar className={classNames(cls.toolbar)}>
                            <Title
                                tag="h2"
                                text={data.title}
                                mode={TitleMode.MARKUP}
                                className={classNames(cls.title)}
                            />
                            <ButtonRegular
                                tag={ButtonTagType.LINK}
                                label="Ко всем новостям"
                                path={RoutesList[RouteSlug.NEWS].url}
                            />
                        </Toolbar>
                    )
                }
            </Container>
        </Section>
    );
};
