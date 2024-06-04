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
        mapKey: '123',
        coords: '[54.717130, 20.507685]',
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
