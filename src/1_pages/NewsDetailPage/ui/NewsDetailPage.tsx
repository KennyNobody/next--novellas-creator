import classNames from 'classnames';
import { MainDataType } from 'app/model/types/MainData';
import { Header } from '2_widgets/Header';
import { DetailPost } from '4_entities/Post';
import {
    Section,
    SectionTagType,
    SectionDecorType,
    SectionThemeMode,
} from '5_shared/ui/Section/Section';
import { Main } from '5_shared/ui/Main/Main';
import { Container } from '5_shared/ui/Container/Container';
import cls from './NewsDetailPage.module.scss';
import { NewsDetailPageType } from '../model/types/NewsDetailPage';
import {Footer} from "../../../2_widgets/Footer";

interface NewsDetailPageProps {
    pageData: NewsDetailPageType;
    mainData: MainDataType;
}

const NewsDetailPage = (props: NewsDetailPageProps) => {
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
                <Section
                    tag={SectionTagType.SECTION}
                    theme={SectionThemeMode.LiGHT}
                    decor={SectionDecorType.BOTTOM}
                >
                    <Container>
                        {
                            pageData?.sectionPostDetail
                            && (
                                <DetailPost data={pageData.sectionPostDetail} />
                            )
                        }
                    </Container>
                </Section>
            </Main>
            <Footer
                data={mainData.sectionMainInfo}
            />
        </>
    );
};

export {
    NewsDetailPage,
};
