import { Metadata } from 'next';
import { PictureType } from '4_entities/Picture';

interface IntroSlide {
    title: string;
    content: string;
    image: PictureType;
    background: PictureType;
}

interface ArticlePostType {
    id: number;
    date: Date;
    slug: string;
    title: string;
    locale: string;
    meta: Metadata;
    updatedAt: Date;
    content: string;
    publishedAt?: Date;
    preview: PictureType;
    previewCaption: string;
    introSlider: IntroSlide;
}

export type {
    ArticlePostType,
};
