import classNames from 'classnames';
import { MainDataType } from 'app';
import { Header } from '2_widgets/Header';
import { Footer } from '2_widgets/Footer';
import { Breadcrumbs } from '3_features/Breadcrumbs';
import { DetailShop, ArticleShopType } from '4_entities/Shop';
import { Main } from '5_shared/ui/Main/Main';
import { RouteSlug } from '5_shared/config/routes';
import { Container } from '5_shared/ui/Container/Container';
import { Section, SectionThemeMode } from '5_shared/ui/Section/Section';
import cls from './ShopDetailPage.module.scss';

interface ShopDetailPageProps {
    pageData: ArticleShopType;
    mainData: MainDataType;
}

const ShopDetailPage = (props: ShopDetailPageProps) => {
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
                    slug={RouteSlug.SHOP}
                    title={pageData?.title}
                />
            </Header>
            <Main className={classNames(cls.block)}>
                <Section
                    theme={SectionThemeMode.LiGHT}
                >
                    <Container>
                        {
                            pageData && <DetailShop data={pageData} />
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
    ShopDetailPage,
};
