import classNames from 'classnames';
import { MainDataType } from 'app';
import { Header } from '2_widgets/Header';
import { Footer } from '2_widgets/Footer';
import { SectionJobPreview } from '2_widgets/SectionJobPreview';
import { Breadcrumbs } from '3_features/Breadcrumbs';
import { ArticleJobType, DetailJob } from '4_entities/Job';
import {
    Section,
    SectionThemeMode,
} from '5_shared/ui/Section/Section';
import { Main } from '5_shared/ui/Main/Main';
import { RouteSlug } from '5_shared/config/routes';
import { WrapperDecor, WrapperDecorType } from '5_shared/ui/WrapperDecor/WrapperDecor';
import cls from './JobDetailPage.module.scss';
import FormVacancy from "../../../3_features/FormVacancy/ui/FormVacancy";
import {Modal} from "../../../5_shared/ui/Modal/Modal";
import {useState} from "react";

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
                    className={classNames(cls.content)}
                    decor={WrapperDecorType.NONE}
                >
                    <Section
                        theme={SectionThemeMode.LiGHT}
                    >
                        {
                            pageData && <DetailJob data={pageData} />
                        }
                    </Section>


                    <SectionJobPreview
                        data={{
                            title: 'Вакансии',
                        }}
                    />
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
