import { Metadata } from 'next';
import { SectionFrontAboutType } from '2_widgets/SectionFrontAbout';
import { SectionFrontNewsType } from '2_widgets/SectionFrontNews';
import { SectionFrontTeamType } from '2_widgets/SectionFrontTeam';
import { SectionSubscribeType } from '2_widgets/SectionSubscribe';

interface FrontPageType {
    sectionMeta: Metadata;
    sectionFrontAbout: SectionFrontAboutType;
    sectionFrontTeam: SectionFrontTeamType;
    sectionFrontNews: SectionFrontNewsType;
    sectionForm: SectionSubscribeType;
}

export {
    type FrontPageType,
};
