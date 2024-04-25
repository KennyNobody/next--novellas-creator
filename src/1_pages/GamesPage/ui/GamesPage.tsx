import classNames from 'classnames';
import { Header } from '2_widgets/Header';
import { Footer } from '2_widgets/Footer';
import { Main } from '5_shared/ui/Main/Main';
import { Container } from '5_shared/ui/Container/Container';
import cls from './GamesPage.module.css';
import { GamesPageType } from '../model/types/GamesPage';
import { MainDataType } from '../../../app/model/types/MainData';

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
            />
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
