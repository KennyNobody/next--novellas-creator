import {
    AuthorType,
    PictureType,
    BlueprintType,
    CollectionType,
} from '5_shared/types/statamic';

interface ArticleWorkerType {
    api_url: string;
    date: Date | null;
    blueprint: BlueprintType;
    collection: CollectionType,
    id: string;
    is_entry: boolean;
    job: string;
    last_modified: Date | null;
    picture: PictureType;
    private: false;
    published: true;
    slug: string;
    status: 'published',
    title: string;
    updated_at: Date | null;
    updated_by: AuthorType;
    // locale: 'default',
    // mount: null,
    // order: null,
    // origin_id: null,
    // permalink: null,
}

export {
    type ArticleWorkerType,
};
