import classNames from 'classnames';
import { Header } from '2_widgets/Header';
import { SectionShopSlider } from '2_widgets/SectionShopSlider';
import { SectionShopCatalog } from '2_widgets/SectionShopCatalog';
import { Main } from '5_shared/ui/Main/Main';
import cls from './ShopPage.module.css';
import { ShopPageType } from '../model/types/ShopPage';

interface ShopPageProps {
    data: ShopPageType;
}

const ShopPage = (props: ShopPageProps) => {
    const { data } = props;

    return (
        <>
            <Header />
            <Main className={classNames(cls.block)}>
                <SectionShopSlider />
                <SectionShopCatalog />
            </Main>
        </>
    );
};

export {
    ShopPage,
};
