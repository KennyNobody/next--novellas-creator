import classNames from 'classnames';
import { MainDataType } from 'app';
import { Footer } from '2_widgets/Footer';
import { Header } from '2_widgets/Header';
import { Section404 } from '2_widgets/Section404';
import { Breadcrumbs } from '3_features/Breadcrumbs';
import { Main } from '5_shared/ui/Main/Main';
import { RouteSlug } from '5_shared/config/routes';
import cls from './NotFoundPage.module.css';

interface NotFoundPage {
    mainData: MainDataType,
}

const NotFoundPage = (props: NotFoundPage) => {
    const { mainData } = props;

    return (
        <>
            <Header
                data={mainData.sectionMainInfo}
            />
            <Main className={classNames(cls.block)}>
                <Section404 />
            </Main>
            <Footer
                data={mainData.sectionMainInfo}
            />
        </>
    );
};

export {
    NotFoundPage,
};
