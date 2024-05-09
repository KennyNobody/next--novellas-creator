import classNames from 'classnames';
import { MainDataType } from 'app';
import { Header } from '2_widgets/Header';
import { Footer } from '2_widgets/Footer';
import { Breadcrumbs } from '3_features/Breadcrumbs';
import { ArticlePostType, DetailPost } from '4_entities/Post';
import { Main } from '5_shared/ui/Main/Main';
import {
    WrapperDecor,
    WrapperDecorType,
} from '5_shared/ui/WrapperDecor/WrapperDecor';
import { RouteSlug } from '5_shared/config/routes';
import { Container } from '5_shared/ui/Container/Container';
import { Section, SectionThemeMode } from '5_shared/ui/Section/Section';
import cls from './NewsDetailPage.module.scss';

interface NewsDetailPageProps {
    pageData: ArticlePostType;
    mainData: MainDataType;
}

const NewsDetailPage = (props: NewsDetailPageProps) => {
    const {
        pageData,
        mainData,
    } = props;

    return (
        <>
            <Header
                data={mainData.sectionMainInfo}
            >
                <Breadcrumbs
                    slug={RouteSlug.NEWS}
                    title={pageData?.title}
                />
            </Header>
            <Main className={classNames(cls.block)}>
                <WrapperDecor
                    decor={WrapperDecorType.BOTTOM}
                >
                    <Section
                        theme={SectionThemeMode.LiGHT}
                    >
                        <Container>
                            {
                                pageData && <DetailPost data={pageData} />
                            }
                        </Container>
                    </Section>
                </WrapperDecor>
            </Main>
            <Footer
                data={mainData.sectionMainInfo}
            />
        </>
    );
};

export {
    NewsDetailPage,
};
