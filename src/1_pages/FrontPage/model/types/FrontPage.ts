import { Metadata } from 'next';
import { SectionFrontAboutType } from '2_widgets/SectionFrontAbout';
import { SectionPreviewNewsType } from '2_widgets/SectionPreviewNews';
import { SectionTeamType } from '2_widgets/SectionTeam';
import { SectionSubscribeType } from '2_widgets/SectionSubscribe';

interface FrontPageType {
    sectionMeta: Metadata;
    sectionFrontAbout: SectionFrontAboutType;
    sectionFrontTeam: SectionTeamType;
    sectionPreviewNews: SectionPreviewNewsType;
    sectionForm: SectionSubscribeType;
}

export {
    type FrontPageType,
};
