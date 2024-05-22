import { Metadata } from 'next';
import { PictureType } from '4_entities/Picture';

interface ArticlePersonType {
    id: number;
    job: string;
    slug: string;
    title: string;
    locale: string;
    createdAt: Date;
    meta: Metadata;
    updatedAt: Date;
    content: string;
    publishedAt?: Date;
    picture: PictureType;
}

export type {
    ArticlePersonType,
};
