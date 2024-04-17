import { Metadata } from 'next';
import { AboutPageType } from '../types/AboutPage';

const sectionMetaMock: Metadata = {
    title: 'Заголовок страницы',
    description: 'Description страницы',
};

const mockData: AboutPageType = {
    sectionMeta: sectionMetaMock,
};

export {
    mockData,
};
