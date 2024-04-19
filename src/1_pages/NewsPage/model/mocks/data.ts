import { Metadata } from 'next';
import { NewsPageType } from '../types/NewsPage';

const sectionMetaMock: Metadata = {
    title: 'Заголовок страницы',
    description: 'Description страницы',
};

const sectionNewsMock = {
    title: '<p><strong>Новости</strong></p>',
};

const mockData: NewsPageType = {
    sectionMeta: sectionMetaMock,
    sectionNews: sectionNewsMock,
};

export {
    mockData,
};
