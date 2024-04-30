import { Metadata } from 'next';
import { SectionPreviewNewsType } from '2_widgets/SectionPreviewNews';

interface JobPageType {
    sectionMeta: Metadata;
    sectionPreviewNews: SectionPreviewNewsType;
}

export {
    type JobPageType,
};
