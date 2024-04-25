import classNames from 'classnames';
import { Header } from '2_widgets/Header';
import { Footer } from '2_widgets/Footer';
import { SectionFrontTeam } from '2_widgets/SectionFrontTeam';
import { SectionFrontNews } from '2_widgets/SectionFrontNews';
import { SectionFrontGame } from '2_widgets/SectionFrontGame';
import { SectionSubscribe } from '2_widgets/SectionSubscribe';
import { SectionFrontIntro } from '2_widgets/SectionFrontIntro';
import { SectionFrontAbout } from '2_widgets/SectionFrontAbout';
import { Main } from '5_shared/ui/Main/Main';
import cls from './FrontPage.module.scss';
import { FrontPageType } from '../model/types/FrontPage';
import { MainDataType } from '../../../app/model/types/MainData';

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
                <SectionFrontIntro title="Интро-слайдер" />
                {
                    pageData?.sectionFrontAbout
                    && (
                        <SectionFrontAbout data={pageData.sectionFrontAbout} />
                    )
                }
                <SectionFrontGame />
                {
                    pageData?.sectionFrontTeam
                    && (
                        <SectionFrontTeam data={pageData.sectionFrontTeam} />
                    )
                }
                {
                    pageData?.sectionFrontNews
                    && (
                        <SectionFrontNews data={pageData.sectionFrontNews} />
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
