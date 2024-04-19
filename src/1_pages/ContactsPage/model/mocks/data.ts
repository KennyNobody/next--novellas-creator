import { Metadata } from 'next';
import { ContactsPageType } from '../types/ContactsPage';

const sectionMetaMock: Metadata = {
    title: 'Заголовок страницы',
    description: 'Description страницы',
};

const mockData: ContactsPageType = {
    sectionMeta: sectionMetaMock,
};

export {
    mockData,
};
