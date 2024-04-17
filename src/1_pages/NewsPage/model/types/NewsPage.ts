import { Metadata } from 'next';
import { SectionPageNewsType } from '2_widgets/SectionPageNews';

interface NewsPageType {
    sectionMeta: Metadata;
    sectionNews: SectionPageNewsType,
}

export {
    type NewsPageType,
};
