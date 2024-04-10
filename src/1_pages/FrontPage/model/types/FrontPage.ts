import { SectionFrontAboutType } from '2_widgets/SectionFrontAbout';
import { SectionFrontGameType } from '2_widgets/SectionFrontGame';
import { SectionFrontTeamType } from '2_widgets/SectionFrontTeam';

interface FrontPageType {
    'section-about': SectionFrontAboutType,
    'section-game': SectionFrontGameType,
    'section-team': SectionFrontTeamType,
}

export {
    type FrontPageType,
};
