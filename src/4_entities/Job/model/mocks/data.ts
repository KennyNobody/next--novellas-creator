import { ArticleJobType } from '../types/ArticleJob';

const dateString: string = '1995-12-17T03:24:00';
const date: Date = new Date(dateString);

const data: ArticleJobType = {
    id: 1,
    slug: 'post_example',
    title: 'Заголовок ArticlePost',
    meta: {
        title: 'Meta-заголовок',
        description: 'Meta-description',
    },
    api_url: 'https://api.novellascreator.ru/api/collections/vacancies/entries/18',
    content: '<p>Контент новости</p>',
    date,
    request_id: 'R1456',
    updated_at: date,
    previewCaption: 'Подзаголовок новости',
    preview_small: {
        id: '1',
        url: 'https://placehold.co/600x900.png',
        permalink: 'https://placehold.co/600x900.png',
        api_url: 'https://placehold.co/600x900.png',
    },
    blueprint: {
        title: 'Вакансии',
        handle: 'vacancy',
    },
    collection: {
        title: 'Вакансии',
        handle: 'vacancies',
    },
    product_vacancy: [
        {
            id: 'product_vacancy::game',
            title: 'Игра',
            slug: 'game',
            url: '/vacancies/product-vacancy/game',
            permalink: 'https://api.novellascreator.ru/vacancies/product-vacancy/game',
            api_url: 'https://api.novellascreator.ru/api/taxonomies/product_vacancy/terms/game',
        },
    ],
    last_modified: date,
    preview_page: {
        id: '1',
        url: 'https://placehold.co/600x900.png',
        permalink: 'https://placehold.co/600x900.png',
        api_url: 'https://placehold.co/600x900.png',
    },
    mestonakhozhdenie: [
        {
            id: 'mestonakhozhdenie::remote',
            title: 'Удаленно',
            slug: 'remote',
            url: '/vacancies/mestonakhozhdenie/remote',
            permalink: 'https://api.novellascreator.ru/vacancies/mestonakhozhdenie/remote',
            api_url: 'https://api.novellascreator.ru/api/taxonomies/mestonakhozhdenie/terms/remote',
        },
    ],
    department_vacancy: [
        {
            id: 'department_vacancy::design',
            title: 'Дизайн',
            slug: 'design',
            url: '/vacancies/department-vacancy/design',
            permalink: 'https://api.novellascreator.ru/vacancies/department-vacancy/design',
            api_url: 'https://api.novellascreator.ru/api/taxonomies/department_vacancy/terms/design',
        },
    ],
    type_vacancy: [
        {
            id: 'type_vacancy::full-time',
            title: 'Полный день',
            slug: 'full-time',
            url: '/vacancies/type-vacancy/full-time',
            permalink: 'https://api.novellascreator.ru/vacancies/type-vacancy/full-time',
            api_url: 'https://api.novellascreator.ru/api/taxonomies/type_vacancy/terms/full-time',
        },
    ],
};

export {
    data,
};
