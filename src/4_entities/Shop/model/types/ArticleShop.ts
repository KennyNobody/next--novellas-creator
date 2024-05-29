import { Metadata } from 'next';
import {
    BlueprintType,
    CollectionType,
} from '5_shared/types/statamic';
import { PictureType } from '4_entities/Picture';

interface ArticleShopType {
    id: number;
    slug: string;
    title: string;
    meta: Metadata;
    vendor: string;
    api_url: string;
    content: string;
    date: Date | null;
    request_id: string;
    price: number | null;
    previewCaption: string;
    priceOld: number | null;
    discount: number | null;
    updated_at: Date | null;
    blueprint: BlueprintType;
    preview_page: PictureType;
    collection: CollectionType;
    last_modified: Date | null;
    picturePreview: PictureType;
}

export {
    type ArticleShopType,
};
