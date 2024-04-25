import { Metadata } from 'next';
import { SectionTeamType } from '2_widgets/SectionTeam';
import { SectionAboutIntroType } from '2_widgets/SectionAboutIntro';

interface AboutPageType {
    sectionMeta: Metadata;
    sectionAboutIntro: SectionAboutIntroType;
    sectionTeam: SectionTeamType;
}

export {
    type AboutPageType,
};
