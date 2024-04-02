import {
    AuthorType,
    PictureType,
    TaxonomyType,
    BlueprintType,
    CollectionType,
} from '5_shared/types/statamic';

interface ArticlePostType {
    id: string;
    slug: string;
    title: string;
    private: false;
    status: string;
    api_url: string;
    published: true;
    content: string;
    is_entry: boolean;
    date: string | null;
    picture: PictureType;
    updated_by: AuthorType;
    updated_at: Date | null;
    theme_tax: TaxonomyType;
    blueprint: BlueprintType;
    collection: CollectionType,
    last_modified: Date | null;

    // TODO: Удалить неиспользуемые типы после окончания работ
    // locale: 'default',
    // mount: null,
    // order: null,
    // origin_id: null,
    // permalink: null,
}

export {
    type ArticlePostType,
};
