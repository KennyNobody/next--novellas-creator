import classNames from 'classnames';
import { MainDataType } from 'app/model/types/MainData';
import { Footer } from '2_widgets/Footer';
import { Header } from '2_widgets/Header';
import { SectionSubscribe } from '2_widgets/SectionSubscribe';
import { SectionListNews } from '2_widgets/SectionListNews';
import { Breadcrumbs } from '3_features/Breadcrumbs';
import { Main } from '5_shared/ui/Main/Main';
import { RouteSlug } from '5_shared/config/routes';
import {
    Section,
    SectionThemeMode,
} from '5_shared/ui/Section/Section';
import cls from './NewsPage.module.css';
import { NewsPageType } from '../model/types/NewsPage';

interface NewsPageProps {
    pageData: NewsPageType;
    mainData: MainDataType,
}

const NewsPage = (props: NewsPageProps) => {
    const {
        pageData,
        mainData,
    } = props;

    return (
        <>
            <Header
                data={mainData.sectionMainInfo}
            >
                <Breadcrumbs slug={RouteSlug.NEWS} />
            </Header>
            <Main className={classNames(cls.block)}>
                <Section
                    theme={SectionThemeMode.LiGHT}
                >
                    {
                        pageData?.sectionNews
                        && (
                            <SectionListNews
                                data={pageData.sectionNews}
                            />
                        )
                    }
                </Section>
                {
                    mainData?.sectionForm
                    && (
                        <SectionSubscribe
                            data={mainData?.sectionForm}
                        />
                    )
                }
            </Main>
            <Footer
                data={mainData.sectionMainInfo}
            />
        </>
    );
};

export {
    NewsPage,
};
