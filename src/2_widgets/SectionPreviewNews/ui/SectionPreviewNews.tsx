'use client';

import classNames from 'classnames';
import { PreviewListPost } from '3_features/PreviewListPost';
import {
    Title,
    TitleMode,
} from '5_shared/ui/Title/Title';
import {
    Section,
    SectionThemeMode,
} from '5_shared/ui/Section/Section';
import { Toolbar } from '5_shared/ui/Toolbar/Toolbar';
import { Container } from '5_shared/ui/Container/Container';
import { RoutesList, RouteSlug } from '5_shared/config/routes';
import { ButtonRegular, ButtonTagType } from '5_shared/ui/ButtonRegular';
import cls from './SectionPreviewNews.module.scss';
import { SectionPreviewNewsType } from '../model/types/SectionPreviewNews';

interface SectionPreviewNewsProps {
    className?: string;
    data: SectionPreviewNewsType;
}

export const SectionPreviewNews = (props: SectionPreviewNewsProps) => {
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
                <PreviewListPost />
            </Container>
        </Section>
    );
};
