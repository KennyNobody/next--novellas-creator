import {
    AuthorType,
    TaxonomyType,
    BlueprintType,
    CollectionType,
} from '5_shared/types/statamic';
import { PictureType } from '4_entities/Picture';

interface ArticleJobType {
    id: string;
    slug: string;
    title: string;
    private: false;
    status: string;
    request_id: string;
    api_url: string;
    published: true;
    content: string;
    is_entry: boolean;
    date: Date | null;
    updated_by: AuthorType;
    updated_at: Date | null;
    blueprint: BlueprintType;
    preview_page: PictureType;
    type_vacancy: TaxonomyType;
    collection: CollectionType;
    last_modified: Date | null;
    preview_small: PictureType;
    product_vacancy: TaxonomyType;

    // TODO: Удалить неиспользуемые типы после окончания работ
    // locale: 'default',
    // mount: null,
    // order: null,
    // origin_id: null,
    // permalink: null,
}

export {
    type ArticleJobType,
};
