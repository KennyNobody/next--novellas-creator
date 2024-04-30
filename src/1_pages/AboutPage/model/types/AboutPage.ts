import { Metadata } from 'next';
import { SectionTeamType } from '2_widgets/SectionTeam';
import { SectionJobPreviewType } from '2_widgets/SectionJobPreview';
import { SectionAboutIntroType } from '2_widgets/SectionAboutIntro';
import { SectionPreviewNewsType } from '2_widgets/SectionPreviewNews';

interface AboutPageType {
    sectionMeta: Metadata;
    sectionAboutIntro: SectionAboutIntroType;
    sectionTeam: SectionTeamType;
    sectionJobPreview: SectionJobPreviewType;
    sectionPreviewNews: SectionPreviewNewsType;
}

export {
    type AboutPageType,
};
