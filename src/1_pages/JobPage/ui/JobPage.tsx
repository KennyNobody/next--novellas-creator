import classNames from 'classnames';
import {Footer} from '2_widgets/Footer';
import {Header} from '2_widgets/Header';
import {SectionJobForm} from '2_widgets/SectionJobForm';
import {SectionJobCatalog} from '2_widgets/SectionJobCatalog';
import {Main} from '5_shared/ui/Main/Main';
import cls from './JobPage.module.css';
import {JobPageType} from '../model/types/JobPage';
import {MainDataType} from '../../../app/model/types/MainData';
import {Breadcrumbs} from "../../../3_features/Breadcrumbs";
import {RouteSlug} from "../../../5_shared/config/routes";

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
                <SectionJobForm />
                <SectionJobCatalog />
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
