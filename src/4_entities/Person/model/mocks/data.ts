import { ArticlePostType } from '../types/ArticlePost';

const dateString: string = '1995-12-17T03:24:00';
const date: Date = new Date(dateString);

const data: ArticlePostType = {
    id: 1,
    slug: 'post_example',
    title: 'Заголовок ArticlePost',
    locale: 'ru',
    createdAt: date,
    updatedAt: date,
    publishedAt: date,
    content: '<p>Контент новости</p>',
    previewCaption: 'Подзаголовок новости',
    preview: {
        id: '1',
        url: 'https://placehold.co/600x900.png',
        permalink: 'https://placehold.co/600x900.png',
        api_url: 'https://placehold.co/600x900.png',
    },
    meta: {
        title: 'Meta-заголовок',
        description: 'Meta-description',
    },
};

export {
    data,
};
