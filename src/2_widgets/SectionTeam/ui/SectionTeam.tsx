import classNames from 'classnames';
import { TeamTabs } from '3_features/TeamTabs';
import {
    Title,
    TitleMode,
} from '5_shared/ui/Title/Title';
import {
    Section,
    SectionTagType,
    SectionThemeMode,
} from '5_shared/ui/Section/Section';
import { Container } from '5_shared/ui/Container/Container';
import cls from './SectionTeam.module.scss';
import { SectionTeamType } from '../model/types/SectionTeam';

interface SectionTeamProps {
    className?: string;
    data: SectionTeamType;
}

export const SectionTeam = (props: SectionTeamProps) => {
    const {
        data,
        className,
    } = props;

    return (
        <Section
            tag={SectionTagType.SECTION}
            theme={SectionThemeMode.DARK}
            className={classNames(cls.block, className)}
        >
            <Container>
                {
                    data?.title
                    && (
                        <Title
                            tag="h2"
                            text={data.title}
                            mode={TitleMode.MARKUP}
                            className={classNames(cls.title)}
                        />
                    )
                }
                <TeamTabs />
            </Container>
        </Section>
    );
};
