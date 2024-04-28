import classNames from 'classnames';
import { MainDataType } from 'app';
import { Header } from '2_widgets/Header';
import { Footer } from '2_widgets/Footer';
import { Breadcrumbs } from '3_features/Breadcrumbs';
import { Main } from '5_shared/ui/Main/Main';
import { RouteSlug } from '5_shared/config/routes';
import { Container } from '5_shared/ui/Container/Container';
import cls from './GamesPage.module.css';
import { GamesPageType } from '../model/types/GamesPage';

interface GamesPageProps {
    pageData: GamesPageType;
    mainData: MainDataType,
}

const GamesPage = (props: GamesPageProps) => {
    const {
        pageData,
        mainData,
    } = props;

    return (
        <>
            <Header
                data={mainData.sectionMainInfo}
            >
                <Breadcrumbs slug={RouteSlug.GAMES} />
            </Header>
            <Main className={classNames(cls.block)}>
                <Container>
                    <div className={classNames(cls.description)}>
                        <p>
                            Это страница Игры
                        </p>
                    </div>
                </Container>
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
