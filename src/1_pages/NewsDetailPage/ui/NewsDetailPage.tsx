import classNames from 'classnames';
import { MainDataType } from 'app';
import { Header } from '2_widgets/Header';
import { Footer } from '2_widgets/Footer';
import { Breadcrumbs } from '3_features/Breadcrumbs';
import { DetailPost } from '4_entities/Post';
import {
    Section,
    SectionTagType,
    SectionThemeMode,
    SectionDecorType,
} from '5_shared/ui/Section/Section';
import { Main } from '5_shared/ui/Main/Main';
import { RouteSlug } from '5_shared/config/routes';
import { Container } from '5_shared/ui/Container/Container';
import cls from './NewsDetailPage.module.scss';
import { NewsDetailPageType } from '../model/types/NewsDetailPage';

interface NewsDetailPageProps {
    pageData: NewsDetailPageType;
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
                    title={pageData.sectionPostDetail.title}
                />
            </Header>
            <Main className={classNames(cls.block)}>
                <Section
                    tag={SectionTagType.SECTION}
                    theme={SectionThemeMode.LiGHT}
                    decor={SectionDecorType.BOTTOM}
                >
                    <Container>
                        {
                            pageData?.sectionPostDetail
                            && (
                                <DetailPost data={pageData.sectionPostDetail} />
                            )
                        }
                    </Container>
                </Section>
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
