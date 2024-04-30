import { Metadata } from 'next';
import { SectionListNewsType } from '2_widgets/SectionListNews';

interface NewsPageType {
    sectionMeta: Metadata;
    sectionNews: SectionListNewsType;
}

export {
    type NewsPageType,
};
