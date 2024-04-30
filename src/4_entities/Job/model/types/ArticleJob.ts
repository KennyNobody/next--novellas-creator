import { Metadata } from 'next';
import {
    TaxonomyType,
    BlueprintType,
    CollectionType,
} from '5_shared/types/statamic';
import { PictureType } from '4_entities/Picture';

interface ArticleJobType {
    id: number;
    slug: string;
    title: string;
    meta: Metadata;
    api_url: string;
    content: string;
    date: Date | null;
    request_id: string;
    previewCaption: string;
    // updated_by: AuthorType;
    updated_at: Date | null;
    blueprint: BlueprintType;
    preview_page: PictureType;
    collection: CollectionType;
    preview_small: PictureType;
    last_modified: Date | null;
    type_vacancy: TaxonomyType[];
    product_vacancy: TaxonomyType[];
    mestonakhozhdenie: TaxonomyType[],
    department_vacancy: TaxonomyType[],
}

export {
    type ArticleJobType,
};
