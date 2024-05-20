import { ArticleShopType } from '../types/ArticleShop';

const dateString: string = '1995-12-17T03:24:00';
const date: Date = new Date(dateString);

const data: ArticleShopType = {
    id: 1,
    slug: 'post_example',
    title: 'Заголовок ArticlePost',
    meta: {
        title: 'Meta-заголовок',
        description: 'Meta-description',
    },
    vendor: '12345',
    api_url: 'https://api.novellascreator.ru/api/collections/vacancies/entries/18',
    content: '<p>Контент новости</p>',
    date,
    request_id: 'R1456',
    previewCaption: 'Подзаголовок новости',
    price: 12345,
    priceOld: 1234,
    discount: 45,
    updated_at: date,
    blueprint: {
        title: 'Вакансии',
        handle: 'vacancy',
    },
    preview_page: {
        id: '1',
        url: 'https://placehold.co/600x900.png',
        permalink: 'https://placehold.co/600x900.png',
        api_url: 'https://placehold.co/600x900.png',
    },
    collection: {
        title: 'Вакансии',
        handle: 'vacancies',
    },
    last_modified: date,
    picturePreview: {
        id: '1',
        url: 'https://placehold.co/600x900.png',
        permalink: 'https://placehold.co/600x900.png',
        api_url: 'https://placehold.co/600x900.png',
    },
};

export {
    data,
};
