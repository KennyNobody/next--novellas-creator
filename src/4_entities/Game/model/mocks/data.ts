import { ArticleGameType } from '../types/ArticleGame';

const dateString: string = '1995-12-17T03:24:00';
const date: Date = new Date(dateString);

const data: ArticleGameType = {
    id: 20,
    slug: 'v-tvoei-golove',
    title: 'В твоей голове',
    api_url: 'https://api.novellascreator.ru/api/collections/games/entries/20',
    blueprint: {
        title: 'Игры',
        handle: 'game',
    },
    collection: {
        title: 'Игры',
        handle: 'games',
    },
    content: '<p>Контент страницы игра &quot;В твоей голове&quot;</p>\n',
    date,
    inFullSlider: true,
    preview_small: {
        id: 'assets::placeholders/game-preview-1.jpg',
        url: '/assets/placeholders/game-preview-1.jpg',
        permalink: 'https://api.novellascreator.ru/assets/placeholders/game-preview-1.jpg',
        api_url: 'https://api.novellascreator.ru/api/assets/assets/placeholders/game-preview-1.jpg',
    },
    preview_page: {
        id: 'assets::placeholders/game-preview-1.jpg',
        url: '/assets/placeholders/game-preview-1.jpg',
        permalink: 'https://api.novellascreator.ru/assets/placeholders/game-preview-1.jpg',
        api_url: 'https://api.novellascreator.ru/api/assets/assets/placeholders/game-preview-1.jpg',
    },
    preview: {
        id: 'assets::placeholders/game-preview-1.jpg',
        url: '/assets/placeholders/game-preview-1.jpg',
        permalink: 'https://api.novellascreator.ru/assets/placeholders/game-preview-1.jpg',
        api_url: 'https://api.novellascreator.ru/api/assets/assets/placeholders/game-preview-1.jpg',
    },
    previewCaption: '<p>Динамичность, быстрое, иногда даже головокружительное развитие сюжета, который захватывает читателя и держит его в напряжении. Это характерно для новелл мастера этого жанра Эдгара Алана По, острота сюжетов его произведений часто приправлена мистикой.</p>\n',
    scienic_tax: [
        {
            id: 'scienic_tax::romantis',
            title: 'Романтика',
            slug: 'romantis',
            url: '/games/scienic-tax/romantis',
            permalink: 'https://api.novellascreator.ru/games/scienic-tax/romantis',
            api_url: 'https://api.novellascreator.ru/api/taxonomies/scienic_tax/terms/romantis',
        },
    ],
    sectionMeta: {
        title: 'В твоей голове',
        description: null,
    },
    sectionSlider: {
        picturePreview: {
            id: 'assets::placeholders/preview_small.png',
            url: '/assets/placeholders/preview_small.png',
            permalink: 'https://api.novellascreator.ru/assets/placeholders/preview_small.png',
            api_url: 'https://api.novellascreator.ru/api/assets/assets/placeholders/preview_small.png',
        },
        picturePerson: {
            id: 'assets::placeholders/600x900.jpg',
            url: '/assets/placeholders/600x900.jpg',
            permalink: 'https://api.novellascreator.ru/assets/placeholders/600x900.jpg',
            api_url: 'https://api.novellascreator.ru/api/assets/assets/placeholders/600x900.jpg',
        },
    },
    platforms: [],
    previewPromo: {
        id: 'assets::placeholders/preview_small.png',
        url: '/assets/placeholders/preview_small.png',
        permalink: 'https://api.novellascreator.ru/assets/placeholders/preview_small.png',
        api_url: 'https://api.novellascreator.ru/api/assets/assets/placeholders/preview_small.png',
    },
};

export {
    data,
};
