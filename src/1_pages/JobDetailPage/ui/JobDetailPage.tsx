import classNames from 'classnames';
import { MainDataType } from 'app';
import { Header } from '2_widgets/Header';
import { Footer } from '2_widgets/Footer';
import { Breadcrumbs } from '3_features/Breadcrumbs';
import { ArticleJobType, DetailJob } from '4_entities/Job';
import {
    Section,
    SectionThemeMode,
} from '5_shared/ui/Section/Section';
import { Main } from '5_shared/ui/Main/Main';
import { RouteSlug } from '5_shared/config/routes';
import { Container } from '5_shared/ui/Container/Container';
import { WrapperDecor, WrapperDecorType } from '5_shared/ui/WrapperDecor/WrapperDecor';
import cls from './JobDetailPage.module.scss';

interface JobDetailPageProps {
    pageData: ArticleJobType;
    mainData: MainDataType;
}

const JobDetailPage = (props: JobDetailPageProps) => {
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
                <Breadcrumbs
                    slug={RouteSlug.JOB}
                    title={pageData?.title}
                />
            </Header>
            <Main className={classNames(cls.block)}>
                <WrapperDecor
                    decor={WrapperDecorType.BOTTOM}
                >
                    <Section
                        theme={SectionThemeMode.LiGHT}
                    >
                        <Container>
                            {
                                pageData && <DetailJob data={pageData} />
                            }
                        </Container>
                    </Section>
                </WrapperDecor>
            </Main>
            <Footer
                data={mainData.sectionMainInfo}
            />
        </>
    );
};

export {
    JobDetailPage,
};
