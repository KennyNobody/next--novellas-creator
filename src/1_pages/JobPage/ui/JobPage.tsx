import classNames from 'classnames';
import { MainDataType } from 'app';
import { Footer } from '2_widgets/Footer';
import { Header } from '2_widgets/Header';
import { SectionJobCatalog } from '2_widgets/SectionJobCatalog';
import { SectionPreviewNews } from '2_widgets/SectionPreviewNews';
import { Breadcrumbs } from '3_features/Breadcrumbs';
import { Main } from '5_shared/ui/Main/Main';
import {
    Section,
    SectionTagType,
    SectionThemeMode,
    SectionDecorType,
} from '5_shared/ui/Section/Section';
import { RouteSlug } from '5_shared/config/routes';
import { JobPageType } from '../model/types/JobPage';
import cls from './JobPage.module.css';

interface JobPageProps {
    pageData: JobPageType;
    mainData: MainDataType;
}

const JobPage = (props: JobPageProps) => {
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
                <Breadcrumbs slug={RouteSlug.JOB} />
            </Header>
            <Main className={classNames(cls.block)}>
                <Section
                    tag={SectionTagType.DIV}
                    decor={SectionDecorType.FULL}
                    theme={SectionThemeMode.LiGHT}
                    className={classNames(cls['section-group'])}
                >
                    <SectionJobCatalog />
                    {
                        pageData?.sectionPreviewNews
                        && (
                            <SectionPreviewNews
                                data={pageData.sectionPreviewNews}
                            />
                        )
                    }
                </Section>
            </Main>
            <Footer
                data={mainData.sectionMainInfo}
            />
        </>
    );
};

export {
    JobPage,
};
