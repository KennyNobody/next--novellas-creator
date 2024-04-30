import { Metadata } from 'next';
import { SectionFrontAboutType } from '2_widgets/SectionFrontAbout';
import { SectionPreviewNewsType } from '2_widgets/SectionPreviewNews';
import { SectionFrontTeamType } from '2_widgets/SectionFrontTeam';
import { SectionSubscribeType } from '2_widgets/SectionSubscribe';

interface FrontPageType {
    sectionMeta: Metadata;
    sectionFrontAbout: SectionFrontAboutType;
    sectionFrontTeam: SectionFrontTeamType;
    sectionPreviewNews: SectionPreviewNewsType;
    sectionForm: SectionSubscribeType;
}

export {
    type FrontPageType,
};
