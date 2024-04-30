import { Metadata } from 'next';
import { SectionSubscribeType } from '2_widgets/SectionSubscribe';
import { SectionFrontTeamType } from '2_widgets/SectionFrontTeam';
import { SectionPreviewNewsType } from '2_widgets/SectionPreviewNews';
import { SectionFrontAboutType } from '2_widgets/SectionFrontAbout';
import { FrontPageType } from '../types/FrontPage';

const sectionMeta: Metadata = {
    title: 'Заголовок страницы',
    description: 'Description страницы',
};

const sectionFrontAbout: SectionFrontAboutType = {
    title: '<p>Заголовок <br/><strong>О нас</strong></p>',
    content: '<p>Их привлекает не столько остросюжетность, сколько психологизм, нравственные терзания героев, проблемы внутреннего кризиса.</p><p>Особенно это касается малых форм, где объём не позволяет разбрасываться и надо выбрать что-то одно: либо закрученный сюжет с неожиданной развязкой.</p>',
    picture: {
        id: '1',
        url: 'https://placehold.co/600x900.png',
        permalink: 'https://placehold.co/600x900.png',
        api_url: 'https://placehold.co/600x900.png',
    },
};

const sectionFrontTeam: SectionFrontTeamType = {
    title: '<p><strong>Наша команда</strong></p>',
    content: '<p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete.</p>',
};

const sectionPreviewNews: SectionPreviewNewsType = {
    title: '<p>Новости</p>\n',
};

const sectionForm: SectionSubscribeType = {
    title: '<p>Подпишитесь<br />\nна наши новости</p>\n',
    content: '<p>Какой-то контент в несколько строк</p>\n',
    buttonText: 'Отправить',
    agreementText: 'Согласие на обработку персональных данных',
};

const mockData: FrontPageType = {
    sectionMeta,
    sectionForm,
    sectionFrontAbout,
    sectionFrontTeam,
    sectionPreviewNews,
};

export {
    mockData,
};
