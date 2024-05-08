import classNames from 'classnames';
import { MainDataType } from 'app';
import { Header } from '2_widgets/Header';
import { Footer } from '2_widgets/Footer';
import { SectionTeam } from '2_widgets/SectionTeam';
import { SectionPreviewNews } from '2_widgets/SectionPreviewNews';
import { SectionFrontGames } from '2_widgets/SectionFrontGames';
import { SectionSubscribe } from '2_widgets/SectionSubscribe';
import { SectionFrontIntro } from '2_widgets/SectionFrontIntro';
import { SectionFrontAbout } from '2_widgets/SectionFrontAbout';
import { Main } from '5_shared/ui/Main/Main';
import { Section, SectionDecorType, SectionTagType } from '5_shared/ui/Section/Section';
import cls from './FrontPage.module.scss';
import { FrontPageType } from '../model/types/FrontPage';

interface FrontPageProps {
    pageData: FrontPageType;
    mainData: MainDataType;
}

const FrontPage = (props: FrontPageProps) => {
    const {
        pageData,
        mainData,
    } = props;

    return (
        <>
            <Header
                isFixed
                isInvert
                data={mainData.sectionMainInfo}
                className={classNames(cls.header)}
            />
            <Main className={classNames(cls.block)}>
                <SectionFrontIntro />
                {
                    pageData?.sectionFrontAbout
                    && (
                        <SectionFrontAbout data={pageData.sectionFrontAbout} />
                    )
                }
                <SectionFrontGames />
                {
                    pageData?.sectionFrontTeam
                    && (
                        <SectionTeam data={pageData.sectionFrontTeam} />
                    )
                }
                {
                    pageData?.sectionPreviewNews
                    && (
                        <Section
                            tag={SectionTagType.DIV}
                            decor={SectionDecorType.FULL}
                        >
                            <SectionPreviewNews
                                data={pageData.sectionPreviewNews}
                                className={classNames(cls['section-news'])}
                            />
                        </Section>
                    )
                }
                {
                    mainData?.sectionForm
                    && (
                        <SectionSubscribe data={mainData.sectionForm} />
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
    FrontPage,
};
