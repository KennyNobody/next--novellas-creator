import classNames from 'classnames';
import { Main } from '5_shared/ui/Main/Main';
import { Container } from '5_shared/ui/Container/Container';
import cls from './AboutPage.module.css';

const AboutPage = () => (
    <Main className={classNames(cls.block)}>
        <Container>
            <div className={classNames(cls.description)}>
                <p>
                    Это страница О нас
                </p>
            </div>
        </Container>
    </Main>
);

export {
    AboutPage,
};
