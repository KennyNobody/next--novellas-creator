import { Metadata } from 'next';
import { SectionTeamType } from '2_widgets/SectionTeam';
import { SectionAboutIntroType } from '2_widgets/SectionAboutIntro';
import { pictureMock } from '4_entities/Picture';
import { AboutPageType } from '../types/AboutPage';

const sectionMetaMock: Metadata = {
    title: 'Заголовок страницы',
    description: 'Description страницы',
};

const sectionTeam: SectionTeamType = {
    title: '<p><strong>Наша</strong> команда</p>',
};

const sectionAboutIntroType: SectionAboutIntroType = {
    title: '<p><strong>Творим истории</strong>в новеллах</p>',
    content: '<p>Подпись под заголовком</p>',
    background: pictureMock,
};

const mockData: AboutPageType = {
    sectionMeta: sectionMetaMock,
    sectionTeam,
    sectionAboutIntro: sectionAboutIntroType,
};

export {
    mockData,
};
