import classNames from 'classnames';
import { Header } from '2_widgets/Header';
import { Main } from '5_shared/ui/Main/Main';
import { Container } from '5_shared/ui/Container/Container';
import cls from './JobPage.module.css';
import { JobPageType } from '../model/types/JobPage';

interface JobPageProps {
    data: JobPageType
}

const JobPage = (props: JobPageProps) => {
    const { data } = props;

    return (
        <>
            <Header />
            <Main className={classNames(cls.block)}>
                <Container>
                    <div className={classNames(cls.description)}>
                        <p>
                            Это страница Вакансии
                        </p>
                    </div>
                </Container>
            </Main>
        </>
    );
};

export {
    JobPage,
};
