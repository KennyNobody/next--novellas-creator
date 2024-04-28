import classNames from 'classnames';
import {Header} from '2_widgets/Header';
import {Footer} from '2_widgets/Footer';
import {SectionSubscribe} from '2_widgets/SectionSubscribe';
import {SectionAboutIntro} from '2_widgets/SectionAboutIntro';
import {Main} from '5_shared/ui/Main/Main';
import cls from './AboutPage.module.css';
import {AboutPageType} from '../model/types/AboutPage';
import {MainDataType} from '../../../app/model/types/MainData';
import {SectionTeam} from "../../../2_widgets/SectionTeam";
import {Breadcrumbs} from "../../../3_features/Breadcrumbs";
import {RouteSlug} from "../../../5_shared/config/routes";

interface AboutPageProps {
    pageData: AboutPageType;
    mainData: MainDataType,
}

const AboutPage = (props: AboutPageProps) => {
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
            >
                <Breadcrumbs slug={RouteSlug.ABOUT} />
            </Header>
            <Main className={classNames(cls.block)}>
                {
                    pageData?.sectionAboutIntro
                    && (
                        <SectionAboutIntro
                            data={pageData.sectionAboutIntro}
                        />
                    )
                }
                {
                    pageData?.sectionTeam
                    && (
                        <SectionTeam data={pageData.sectionTeam} />
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
    AboutPage,
};
