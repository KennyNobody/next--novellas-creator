import { SectionSubscribeType } from '2_widgets/SectionSubscribe';
import { LogoType } from '4_entities/Logo';
import { ContactItemType } from '4_entities/ContactItem';

interface MainIntoType {
    companyName: string;
    blockLogo: LogoType;
    contactsSupport: ContactItemType;
}

interface MainDataType {
    sectionForm: SectionSubscribeType;
    sectionMainInfo: MainIntoType;
}

export {
    type MainDataType,
    type MainIntoType,
};
