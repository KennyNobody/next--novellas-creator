import classNames from 'classnames';
import { MainDataType } from 'app';
import { Header } from '2_widgets/Header';
import { Footer } from '2_widgets/Footer';
import { SectionTeam } from '2_widgets/SectionTeam';
import { SectionSubscribe } from '2_widgets/SectionSubscribe';
import { SectionAboutIntro } from '2_widgets/SectionAboutIntro';
import { SectionJobPreview } from '2_widgets/SectionJobPreview';
import { SectionPreviewNews } from '2_widgets/SectionPreviewNews';
import { Breadcrumbs } from '3_features/Breadcrumbs';
import {
    Section,
    SectionTagType,
    SectionThemeMode,
    SectionDecorType,
} from '5_shared/ui/Section/Section';
import { Main } from '5_shared/ui/Main/Main';
import { RouteSlug } from '5_shared/config/routes';
import { AboutPageType } from '../model/types/AboutPage';
import cls from './AboutPage.module.scss';

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
                <Section
                    tag={SectionTagType.DIV}
                    theme={SectionThemeMode.LiGHT}
                    decor={SectionDecorType.BOTTOM}
                    className={classNames(cls['section-lists'])}
                >
                    {
                        pageData?.sectionAboutIntro
                        && (
                            <SectionJobPreview data={pageData.sectionJobPreview} />
                        )
                    }
                    {
                        pageData?.sectionPreviewNews
                        && (
                            <SectionPreviewNews data={pageData.sectionPreviewNews} />
                        )
                    }
                </Section>
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
