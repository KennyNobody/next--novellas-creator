import { Metadata } from 'next';
import { SectionTeamType } from '2_widgets/SectionTeam';
import { SectionAboutIntroType } from '2_widgets/SectionAboutIntro';
import { SectionJobPreviewType } from '2_widgets/SectionJobPreview';
import { SectionPreviewNewsType } from '2_widgets/SectionPreviewNews';
import { pictureMock } from '4_entities/Picture';
import { AboutPageType } from '../types/AboutPage';

const sectionMeta: Metadata = {
    title: 'Заголовок страницы',
    description: 'Description страницы',
};

const sectionTeam: SectionTeamType = {
    title: '<p><strong>Наша</strong> команда</p>',
};

const sectionAboutIntro: SectionAboutIntroType = {
    title: '<p><strong>Творим истории</strong>в новеллах</p>',
    content: '<p>Подпись под заголовком</p>',
    background: pictureMock,
};

const sectionJobPreview: SectionJobPreviewType = {
    title: 'Вакансии',
};

const sectionPreviewNews: SectionPreviewNewsType = {
    title: 'Новости',
};

const mockData: AboutPageType = {
    sectionMeta,
    sectionTeam,
    sectionAboutIntro,
    sectionJobPreview,
    sectionPreviewNews,
};

export {
    mockData,
};
