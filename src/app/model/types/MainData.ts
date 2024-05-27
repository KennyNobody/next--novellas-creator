import { SectionSubscribeType } from '2_widgets/SectionSubscribe';
import { SocialLink } from '3_features/Socials';
import { LogoType } from '4_entities/Logo';
import { ContactItemType } from '4_entities/ContactItem';

interface FooterLink {
    id: string;
    title: string;
    link: string;
}

interface MainIntoType {
    companyName: string;
    blockLogo: LogoType;
    footerLink: FooterLink[];
    contactsSupport: ContactItemType;
    socials: {
        list: SocialLink[];
    };
}

interface MainDataType {
    sectionForm: SectionSubscribeType;
    sectionMainInfo: MainIntoType;
}

export {
    type MainDataType,
    type MainIntoType,
};
