import classNames from 'classnames';
import { Header } from '2_widgets/Header';
import { SectionShopSlider } from '2_widgets/SectionShopSlider';
import { SectionShopCatalog } from '2_widgets/SectionShopCatalog';
import { Main } from '5_shared/ui/Main/Main';
import cls from './ShopPage.module.css';
import { ShopPageType } from '../model/types/ShopPage';
import { MainDataType } from '../../../app/model/types/MainData';
import {Footer} from "../../../2_widgets/Footer";

interface ShopPageProps {
    pageData: ShopPageType;
    mainData: MainDataType;
}

const ShopPage = (props: ShopPageProps) => {
    const {
        pageData,
        mainData,
    } = props;

    return (
        <>
            <Header
                data={mainData.sectionMainInfo}
            />
            <Main className={classNames(cls.block)}>
                <SectionShopSlider />
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
