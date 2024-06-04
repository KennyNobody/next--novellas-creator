import { Metadata } from 'next';
import { PictureType } from '4_entities/Picture';
import {
    TaxonomyType,
    BlueprintType,
    CollectionType,
} from '5_shared/types/statamic';
import {PlatformType} from "../../../Platform";

interface GamePreviewSlideType {
    // pictureFull: PictureType;
    picturePerson: PictureType;
    picturePreview: PictureType;
}

interface ArticleGameType {
    id: number;
    slug: string;
    title: string;
    api_url: string;
    content: string;
    date: Date | null;
    // request_id: string;
    preview: PictureType;
    sectionMeta: Metadata;
    inFullSlider: boolean;
    previewCaption: string;
    platforms: PlatformType[];
    // updated_at: Date | null;
    blueprint: BlueprintType;
    preview_page: PictureType;
    collection: CollectionType;
    preview_small: PictureType;
    // last_modified: Date | null;
    scienic_tax: TaxonomyType[];
    previewPromo: PictureType;
    sectionSlider: GamePreviewSlideType;
}

export type {
    ArticleGameType,
    GamePreviewSlideType,
};
