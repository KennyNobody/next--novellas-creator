import classNames from 'classnames';
import { MainDataType } from 'app';
import { Header } from '2_widgets/Header';
import { Footer } from '2_widgets/Footer';
import { Breadcrumbs } from '3_features/Breadcrumbs';
import { Main } from '5_shared/ui/Main/Main';
import { RouteSlug } from '5_shared/config/routes';
import cls from './GamesPage.module.css';
// import { GamesPageType } from '../model/types/GamesPage';
import { WrapperDecor, WrapperDecorType } from '../../../5_shared/ui/WrapperDecor/WrapperDecor';
import { Container } from '../../../5_shared/ui/Container/Container';
import {SectionGameCatalog} from "../../../2_widgets/SectionGameCatalog";
import {SectionGameIntro} from "../../../2_widgets/SectionGameIntro";

interface GamesPageProps {
    // pageData: GamesPageType;
    mainData: MainDataType,
}

const GamesPage = (props: GamesPageProps) => {
    const {
        // pageData,
        mainData,
    } = props;

    return (
        <>
            <Header
                isFixed
                isInvert
                data={mainData.sectionMainInfo}
            >
                <Breadcrumbs slug={RouteSlug.GAMES} />
            </Header>
            <Main className={classNames(cls.block)}>
                <SectionGameIntro />
                <SectionGameCatalog />
            </Main>
            <Footer
                data={mainData.sectionMainInfo}
            />
        </>
    );
};

export {
    GamesPage,
};
