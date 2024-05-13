import classNames from 'classnames';
import { MainDataType } from 'app';
import { Header } from '2_widgets/Header';
import { Footer } from '2_widgets/Footer';
import { SectionSubscribe } from '2_widgets/SectionSubscribe';
import { SectionPreviewNews } from '2_widgets/SectionPreviewNews';
import { Breadcrumbs } from '3_features/Breadcrumbs';
import { ArticlePostType, DetailPost } from '4_entities/Post';
import { Main } from '5_shared/ui/Main/Main';
import { RouteSlug } from '5_shared/config/routes';
import { Container } from '5_shared/ui/Container/Container';
import { Section, SectionThemeMode } from '5_shared/ui/Section/Section';
import { WrapperDecor, WrapperDecorType } from '5_shared/ui/WrapperDecor/WrapperDecor';
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
                    className={classNames(cls.wrapper)}
                >
                    <Section
                        theme={SectionThemeMode.LiGHT}
                        className={classNames(cls.detail)}
                    >
                        <Container>
                            {
                                pageData && <DetailPost data={pageData} />
                            }
                        </Container>
                    </Section>
                    <SectionPreviewNews
                        data={{
                            title: 'Другие новости',
                        }}
                    />
                </WrapperDecor>
                {
                    mainData?.sectionForm
                    && (
                        <SectionSubscribe data={mainData.sectionForm} />
                    )
                }
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
