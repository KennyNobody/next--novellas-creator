import { PictureType } from '4_entities/Picture';
import { DetailPostType } from './DetailPost';

interface ArticlePostType {
    id: number;
    slug: string;
    title: string;
    locale: string;
    createdAt: Date;
    updatedAt: Date;
    publishedAt?: Date;
    preview: PictureType;
    sectionPostDetail: DetailPostType;
}

export type {
    ArticlePostType,
};
