import { Metadata } from 'next';
import { pictureMock } from '4_entities/Picture';
import { ContactsPageType } from '../types/ContactsPage';

const sectionMetaMock: Metadata = {
    title: 'Заголовок страницы',
    description: 'Description страницы',
};

const mockData: ContactsPageType = {
    sectionMeta: sectionMetaMock,
    sectionContacts: {
        mapFrame: {
            value: '',
            code: '',
        },
        picture: pictureMock,
        blockLinks: {
            title: '',
            links: [],
        },
    },
};

export {
    mockData,
};
