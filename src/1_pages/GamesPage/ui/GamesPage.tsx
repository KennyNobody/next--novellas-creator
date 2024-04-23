import classNames from 'classnames';
import { Header } from '2_widgets/Header';
import { Main } from '5_shared/ui/Main/Main';
import { Container } from '5_shared/ui/Container/Container';
import { GamesPageType } from '../model/types/GamesPage';
import cls from './GamesPage.module.css';

interface GamesPageProps {
    data: GamesPageType;
}

const GamesPage = (props: GamesPageProps) => {
    const { data } = props;

    return (
        <>
            <Header />
            <Main className={classNames(cls.block)}>
                <Container>
                    <div className={classNames(cls.description)}>
                        <p>
                            Это страница Игры
                        </p>
                    </div>
                </Container>
            </Main>
        </>
    );
};

export {
    GamesPage,
};
