import { Metadata } from 'next';
import { JobPageType } from '../types/JobPage';

const sectionMetaMock: Metadata = {
    title: 'Заголовок страницы',
    description: 'Description страницы',
};

const mockData: JobPageType = {
    sectionMeta: sectionMetaMock,
};

export {
    mockData,
};
