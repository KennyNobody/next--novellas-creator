import { FrontPageType } from '../types/FrontPage';

const sectionAboutMock = {
    title: '<p>Заголовок <br/><strong>О нас</strong></p>',
    content: '<p>Их привлекает не столько остросюжетность, сколько психологизм, нравственные терзания героев, проблемы внутреннего кризиса.</p><p>Особенно это касается малых форм, где объём не позволяет разбрасываться и надо выбрать что-то одно: либо закрученный сюжет с неожиданной развязкой.</p>',
    picture: {
        id: '1',
        url: 'https://placehold.co/600x900.png',
        permalink: 'https://placehold.co/600x900.png',
        api_url: 'https://placehold.co/600x900.png',
    },
};

const sectionGameMock = {
    title: '<p>Судьба <br/><strong>Алисы</strong></p>',
    content: '<p>Динамичность, быстрое, иногда даже головокружительное развитие сюжета, который захватывает читателя и держит его в напряжении. Это характерно для новелл мастера этого жанра Эдгара Алана По, острота сюжетов его произведений часто приправлена мистикой.</p>',
    picture: {
        id: '1',
        url: 'https://placehold.co/600x900.png',
        permalink: 'https://placehold.co/600x900.png',
        api_url: 'https://placehold.co/600x900.png',
    },
};

const sectionTeamMock = {
    title: '<p><strong>Наша команда</strong></p>',
    content: '<p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete.</p>',
};

const mockData: FrontPageType = {
    'section-about': sectionAboutMock,
    'section-game': sectionGameMock,
    'section-team': sectionTeamMock,
};

export {
    mockData,
};
