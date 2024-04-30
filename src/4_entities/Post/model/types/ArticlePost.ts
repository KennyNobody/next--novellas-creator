import { Metadata } from 'next';
import { PictureType } from '4_entities/Picture';

interface ArticlePostType {
    id: number;
    slug: string;
    title: string;
    locale: string;
    createdAt: Date;
    meta: Metadata;
    updatedAt: Date;
    content: string;
    publishedAt?: Date;
    preview: PictureType;
    previewCaption: string;
}

export type {
    ArticlePostType,
};
