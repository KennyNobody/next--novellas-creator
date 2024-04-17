import classNames from 'classnames';
import { Main } from '5_shared/ui/Main/Main';
import { Container } from '5_shared/ui/Container/Container';
import cls from './AboutPage.module.css';
import { AboutPageType } from '../model/types/AboutPage';

interface AboutPageProps {
    data: AboutPageType;
}

const AboutPage = (props: AboutPageProps) => {
    const { data } = props;

    return (
        <Main className={classNames(cls.block)}>
            <Container>
                <div className={classNames(cls.description)}>
                    <h2>
                        Это страница О нас
                    </h2>
                </div>
            </Container>
        </Main>
    );
};

export {
    AboutPage,
};
