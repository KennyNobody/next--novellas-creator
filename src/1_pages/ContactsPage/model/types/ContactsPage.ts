import { Metadata } from 'next';
import { SectionContactsType } from '2_widgets/SectionContacts';

interface ContactsPageType {
    sectionMeta: Metadata;
    sectionContacts: SectionContactsType;
}

export {
    type ContactsPageType,
};
