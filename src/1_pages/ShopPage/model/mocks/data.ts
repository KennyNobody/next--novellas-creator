import { Metadata } from 'next';
import { ShopPageType } from '../types/ShopPage';

const sectionMetaMock: Metadata = {
    title: 'Заголовок страницы',
    description: 'Description страницы',
};

const mockData: ShopPageType = {
    sectionMeta: sectionMetaMock,
};

export {
    mockData,
};
