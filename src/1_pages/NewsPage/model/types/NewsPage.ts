import { Metadata } from 'next';
import { SectionPageNewsType } from '2_widgets/SectionPageNews';
import { SectionSubscribeType } from '2_widgets/SectionSubscribe';

interface NewsPageType {
    sectionMeta: Metadata;
    sectionNews: SectionPageNewsType;
}

export {
    type NewsPageType,
};
