import { Metadata } from 'next';
import { GamesPageType } from '../types/GamesPage';

const sectionMetaMock: Metadata = {
    title: 'Заголовок страницы',
    description: 'Description страницы',
};

const mockData: GamesPageType = {
    sectionMeta: sectionMetaMock,
};

export {
    mockData,
};
