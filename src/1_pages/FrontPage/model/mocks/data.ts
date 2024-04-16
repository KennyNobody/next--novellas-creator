import { Metadata } from 'next';
import { SectionSubscribeType } from '2_widgets/SectionSubscribe';
import { SectionFrontNewsType } from '2_widgets/SectionFrontNews';
import { FrontPageType } from '../types/FrontPage';

const sectionMetaMock: Metadata = {
    title: 'Заголовок страницы',
    description: 'Description страницы',
};

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

const sectionTeamMock = {
    title: '<p><strong>Наша команда</strong></p>',
    content: '<p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete.</p>',
};

const sectionFrontNewsMock: SectionFrontNewsType = {
    title: '<p>Новости</p>\n',
};

const sectionFormMock: SectionSubscribeType = {
    title: '<p>Подпишитесь<br />\nна наши новости</p>\n',
    content: '<p>Какой-то контент в несколько строк</p>\n',
    buttonText: 'Отправить',
    agreementText: 'Согласие на обработку персональных данных',
};

const mockData: FrontPageType = {
    sectionMeta: sectionMetaMock,
    sectionForm: sectionFormMock,
    sectionFrontAbout: sectionAboutMock,
    sectionFrontTeam: sectionTeamMock,
    sectionFrontNews: sectionFrontNewsMock,
};

export {
    mockData,
};
