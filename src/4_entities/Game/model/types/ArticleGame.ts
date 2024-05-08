import { Metadata } from 'next';
import { PictureType } from '4_entities/Picture';
import {
    TaxonomyType,
    BlueprintType,
    CollectionType,
} from '5_shared/types/statamic';

interface GamePreviewSlideType {
    pictureFull: PictureType;
    picturePerson: PictureType;
    picturePreview: PictureType;
}

interface ArticleGameType {
    id: number;
    slug: string;
    title: string;
    meta: Metadata;
    api_url: string;
    content: string;
    date: Date | null;
    request_id: string;
    previewCaption: string;
    updated_at: Date | null;
    blueprint: BlueprintType;
    preview_page: PictureType;
    collection: CollectionType;
    preview_small: PictureType;
    last_modified: Date | null;
    scienic_tax: TaxonomyType[];
    sectionSlider: GamePreviewSlideType;
}

export type {
    ArticleGameType,
    GamePreviewSlideType,
};
