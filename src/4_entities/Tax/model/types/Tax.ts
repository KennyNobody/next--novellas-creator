import { BlueprintType } from '5_shared/types/statamic';

interface TaxonomyBaseType {
    title: string;
    handle: string;
}

interface TaxType {
    id: string;
    slug: string;
    title: string;
    entries_count: number;
    blueprint: BlueprintType;
    taxonomy: TaxonomyBaseType,
}

interface TaxSimpleType {
    title?: string;
    key: string;
    slug: string;
}

export {
    type TaxType,
    type TaxSimpleType,
};
