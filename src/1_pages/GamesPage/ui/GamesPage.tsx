import classNames from 'classnames';
import { Main } from '5_shared/ui/Main/Main';
import { Container } from '5_shared/ui/Container/Container';
import cls from './GamesPage.module.css';
import { SectionTest } from '../../../2_widgets/SectionTest';

const GamesPage = () => (
    <Main className={classNames(cls.block)}>
        <SectionTest />
        <Container>
            <div className={classNames(cls.description)}>
                <p>
                    Это страница Игры
                </p>
            </div>
        </Container>
    </Main>
);

export {
    GamesPage,
};
