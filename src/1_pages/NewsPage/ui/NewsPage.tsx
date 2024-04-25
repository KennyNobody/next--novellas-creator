import classNames from 'classnames';
import { Header } from '2_widgets/Header';
import { SectionPageNews } from '2_widgets/SectionPageNews';
import { SectionSubscribe } from '2_widgets/SectionSubscribe';
import { Main } from '5_shared/ui/Main/Main';
import cls from './NewsPage.module.css';
import { NewsPageType } from '../model/types/NewsPage';
import {MainDataType} from "../../../app/model/types/MainData";
import {Footer} from "../../../2_widgets/Footer";

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
            />
            <Main className={classNames(cls.block)}>
                {
                    pageData?.sectionNews
                    && (
                        <SectionPageNews
                            data={pageData.sectionNews}
                        />
                    )
                }
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
