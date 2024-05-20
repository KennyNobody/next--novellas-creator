import classNames from 'classnames';
import { MainDataType } from 'app';
import { Header } from '2_widgets/Header';
import { Footer } from '2_widgets/Footer';
import { SectionShopSlider } from '2_widgets/SectionShopSlider';
import { SectionShopCatalog } from '2_widgets/SectionShopCatalog';
import { Breadcrumbs } from '3_features/Breadcrumbs';
import { Main } from '5_shared/ui/Main/Main';
import {
    WrapperDecor,
    WrapperDecorType,
} from '5_shared/ui/WrapperDecor/WrapperDecor';
import { RouteSlug } from '5_shared/config/routes';
// import { ShopPageType } from '../model/types/ShopPage';
import cls from './ShopPage.module.css';

interface ShopPageProps {
    // pageData: ShopPageType;
    mainData: MainDataType;
}

const ShopPage = (props: ShopPageProps) => {
    const {
        // pageData,
        mainData,
    } = props;

    return (
        <>
            <Header
                isInvert
                data={mainData.sectionMainInfo}
            >
                <Breadcrumbs slug={RouteSlug.SHOP} />
            </Header>
            <Main className={classNames(cls.block)}>
                {/*<WrapperDecor decor={WrapperDecorType.BOTTOM}>*/}
                {/*    <SectionShopSlider />*/}
                {/*</WrapperDecor>*/}
                <SectionShopCatalog />
            </Main>
            <Footer
                data={mainData.sectionMainInfo}
            />
        </>
    );
};

export {
    ShopPage,
};
