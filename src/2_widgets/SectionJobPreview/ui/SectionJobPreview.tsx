import classNames from 'classnames';
import { GridJobPreview } from '3_features/GridJobPreview';
import {
    Section,
    SectionTagType,
    SectionThemeMode,
} from '5_shared/ui/Section/Section';
import { Toolbar } from '5_shared/ui/Toolbar/Toolbar';
import { Title, TitleMode } from '5_shared/ui/Title/Title';
import { Container } from '5_shared/ui/Container/Container';
import { ButtonRegular, ButtonTagType } from '5_shared/ui/ButtonRegular';
import { RoutesList, RouteSlug } from '5_shared/config/routes';
import cls from './SectionJobPreview.module.scss';
import { SectionJobPreviewType } from '../model/types/SectionJobPreview';

interface SectionJobPreviewProps {
    className?: string;
    data: SectionJobPreviewType;
}

export const SectionJobPreview = (props: SectionJobPreviewProps) => {
    const {
        data,
        className,
    } = props;

    return (
        <Section
            tag={SectionTagType.SECTION}
            theme={SectionThemeMode.LiGHT}
            className={
                classNames(
                    cls.block,
                    className,
                )
            }
        >
            <Container>
                <Toolbar>
                    {
                        data?.title
                        && (
                            <Title
                                tag="h1"
                                text={data.title}
                                mode={TitleMode.STRING}
                                className={classNames(cls.title)}
                            />
                        )
                    }
                    <ButtonRegular
                        tag={ButtonTagType.LINK}
                        label="Все вакансии"
                        path={RoutesList[RouteSlug.JOB].url}
                    />
                </Toolbar>
                <GridJobPreview />
            </Container>
        </Section>
    );
};
