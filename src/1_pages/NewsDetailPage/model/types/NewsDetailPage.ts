import { Metadata } from 'next';
import { DetailPostType } from '4_entities/Post';

interface NewsDetailPageType {
    sectionMeta: Metadata;
    sectionPostDetail: DetailPostType;
}

export {
    type NewsDetailPageType,
};
